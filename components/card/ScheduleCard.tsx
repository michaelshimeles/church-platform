"use client"
import React from 'react'
import { Button } from '../ui/button';
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
import { useForm } from "react-hook-form"
import { DialogClose } from '@radix-ui/react-dialog';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from '../ui/toast';

interface ScheduleCardProps {
    eventName: string,
    eventLead: string
    eventDate: string,
    eventTime: string,
    eventAddress: string,
    eventDescription: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ eventName, eventLead, eventDate, eventTime, eventAddress, eventDescription }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()
    const { toast } = useToast()

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/text/register`, {
                method: "POST",
                body: JSON.stringify({
                    "fullName": data?.fullName,
                    "phoneNumber": data?.phoneNumber,
                    "event": eventName
                })
            })

            const result = await response.json()
            console.log("Result", result)
            toast({
                title: `You've been registered`,
                description: `As the ${eventName} get closer, we'll shoot you a text as a reminder!`,
            })
            reset()
            return result
        } catch (error) {
            return error
        }
    }
    return (
        <div
            className="relative block overflow-hidden rounded-lg border dark:border-gray-800 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                        {eventName}
                    </h3>
                </div>
            </div>

            <div className="mt-4">
                <p className="max-w-[40ch] text-sm dark:text-gray-300 light:text-gray-600">
                    {eventDescription}
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium dark:text-gray-100 light:text-gray-600">{eventDate}</dt>
                    <dd className="text-xs dark:text-gray-200 light:text-gray-600">Schedule</dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium dark:text-gray-100 light:text-gray-600">{eventTime} EST</dt>
                    <dd className="text-xs dark:text-gray-200 light:text-gray-600">Time</dd>
                </div>
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium dark:text-gray-100 light:text-gray-600">{eventAddress}</dt>
                    <dd className="text-xs dark:text-gray-200 light:text-gray-600">Address</dd>
                </div>
            </dl>
            <div className='mt-[1rem]'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Join</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogHeader>
                                <DialogTitle>Register for our {eventName}</DialogTitle>
                                <DialogDescription className='pb-[0.5rem] pt-[0.1rem]'>
                                    We&apos;ll text you link to our church whatsapp group and to stay up to date
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">
                                        Full Name
                                    </Label>
                                    <Input {...register("fullName", { required: true })} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">
                                        Phone #
                                    </Label>
                                    <Input {...register("phoneNumber", { required: true })} className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div >
        </div>
    );
}

export default ScheduleCard;