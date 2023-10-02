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

interface ScheduleCardProps {
    eventName: string,
    eventLead: string
    eventDate: string,
    eventTime: string,
    eventAddress: string,
    eventDescription: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ eventName, eventLead, eventDate, eventTime, eventAddress, eventDescription }) => {
    return (
        <div
            className="relative block overflow-hidden rounded-lg border border-gray-800 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                        {eventName}
                    </h3>

                    {/* <p className="mt-1 text-xs font-medium dark:text-grey-400 light:text-gray-600">By {eventLead}</p> */}
                </div>

                {/* <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt="Paul Clapton"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />
                </div> */}
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
                        <DialogHeader>
                            <DialogTitle>Register for our {eventName}</DialogTitle>
                            <DialogDescription>
                                We&apos;ll text you link to our church whatsapp group and to stay up to date
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Full Name
                                </Label>
                                <Input id="name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Phone #
                                </Label>
                                <Input id="username" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div >
        </div>
    );
}

export default ScheduleCard;