
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "./ui/button"
export default function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl/tight dark:text-zinc-50">
                        Join us for a life changing experience.
                    </h2>
                    <p className="max-w-[600px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                        We are a community that believes in the Life giving Lord & King Jesus Christ.
                    </p>
                    <div className="flex space-x-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300">Join Our Fellowship</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Join Our Church</DialogTitle>
                                    <DialogDescription>
                                        We&apos;ll text you link to our church whatsapp group and to stay up to date
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label className="text-right">
                                            Full Name
                                        </Label>
                                        <Input id="name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label className="text-right">
                                            Phone #
                                        </Label>
                                        <Input className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

        </section>
    )
}
