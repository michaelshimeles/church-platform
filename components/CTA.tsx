"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Sentry from "@sentry/nextjs";
import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import { useToast } from "@/components/ui/use-toast"

const CTAForm = z.object({
    firstName: z.string().min(3, {
        message: "Name is required"
    }),
    lastName: z.string().min(3, {
        message: "Name is required"
    }),
    phone: z.string().min(3, {
        message: "Message is required"
    }),
})

type CTAFormInput = z.infer<typeof CTAForm>

export default function CTA({ ministry }: {
    ministry: string
}) {
    const form = useRef();
    const { toast } = useToast()
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, } = useForm<CTAFormInput>({
        resolver: zodResolver(CTAForm),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof CTAForm>) => {
        const transaction = Sentry.startTransaction({
            name: "Join Church CTA",
        });

        Sentry.configureScope((scope) => {
            scope.setSpan(transaction);
        });

        try {
            const response = await fetch(`/api/text/cta`, {
                method: "POST",
                body: JSON.stringify({
                    firstName: data?.firstName,
                    lastName: data?.lastName,
                    phone: data?.phone,
                    ministry
                })
            })
            const result = await response.json()

            if (ministry === "amharic") {
                toast({
                    title: `We will contact you`,
                    description: `Our Pastor will reach out to you shortly`,
                })
            }

            toast({
                title: `Check your messages`,
                description: `We've sent you a text with the information to join`,
            })

            reset()
            return result
        } catch (error) {
            throw new Error(error as any);
        } finally {
            transaction.finish();
        }
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2">
                <div className="space-y-3">
                    {ministry === "english" ?
                        <>
                            <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl/tight dark:text-zinc-50">
                                Join us for a life changing experience.
                            </h2>
                            <p className="max-w-[600px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                We are a community that believes in the Life giving Lord & King Jesus Christ.
                            </p>
                        </> :
                        <>
                            <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl/tight dark:text-zinc-50">
                                እንጋብዝሃለን
                            </h2>
                            <p className="max-w-[600px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                                እኛ በጌታ እና በንጉሥ ኢየሱስ ክርስቶስ የምናምን ማህበረሰብ ነን
                            </p>
                        </>}

                    <div className="flex space-x-4">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                {ministry === "english" ? <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300">
                                    Join Our Fellowship
                                </Button> :
                                    <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300">
                                        ህብረታችንን ይቀላቀሉ
                                    </Button>
                                }
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <form ref={form as any} onSubmit={handleSubmit(onSubmit)}>
                                    {ministry === 'english' ? <DialogHeader>
                                        <DialogTitle>Join Our Church</DialogTitle>
                                        <DialogDescription>
                                            We&apos;ll text you link to our church whatsapp group and to stay up to date
                                        </DialogDescription>
                                    </DialogHeader> :
                                        <DialogHeader>
                                            <DialogTitle>ቤተክርስቲያናችን እንድትገኙ እንጋብዛችኋለን</DialogTitle>
                                            <DialogDescription>
                                                ፓስተራችን በጽሁፍ/በመደወል ያገኝዎታል
                                            </DialogDescription>
                                        </DialogHeader>
                                    }
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">
                                                First Name
                                            </Label>
                                            <Input {...register("firstName", { required: true })} className="col-span-3" />
                                            {errors?.firstName?.message && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">
                                                Last Name
                                            </Label>
                                            <Input {...register("lastName", { required: true })} className="col-span-3" />
                                            {errors?.lastName?.message && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">
                                                Phone #
                                            </Label>
                                            <Input {...register("phone", { required: true })} className="col-span-3" />
                                            {errors?.phone?.message && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={() => setOpen(false)}>Submit</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

        </section>
    )
}