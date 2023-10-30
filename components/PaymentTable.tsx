"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import { Info, Loader2, Receipt } from "lucide-react";
import { useEffect, useState } from "react";
import * as Sentry from "@sentry/nextjs";

export const Icon = {
    spinner: Loader2,
};

import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Button } from "./ui/button";
import { useGetDonations } from "@/utils/hooks/useGetDonations";
export default function PaymentTable() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [billingInfo, setBillingInfo] = useState<any>(null)
    const [paymentInfo, setPaymentInfo] = useState<any>(null)


    const { data, error, isLoading } = useGetDonations(user?.emailAddresses?.[0]?.emailAddress as string, user)

    // const paymentObject = paymentInfo?.payment_details ? JSON.parse(paymentInfo.payment_details) : null;

    // console.log("Data", (billingInfo?.payment?.data))
    // console.log("paymentObject", paymentObject)

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Donations Tracking
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    Track all your donations to our church
                </p>
            </div>
            {!isLoading ?
                <Table>
                    <TableCaption>Financial Donations to the Church</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">Email</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Receipt Email</TableHead>
                            {/* <TableHead className="text-center">Receipt Link</TableHead>
                            <TableHead className="text-center">More Info</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.financials?.payments.map((info: any, index: number) => (
                            <TableRow key={index} onClick={() => {
                                setBillingInfo(info)
                                setPaymentInfo(info)
                            }}>
                                <TableCell className="font-medium">{info?.email}</TableCell>
                                <TableCell>${Number(info?.amount) / 100}</TableCell>
                                <TableCell>{info?.currency?.toUpperCase()}</TableCell>
                                <TableCell>{info?.payment_date}</TableCell>
                                <TableCell>{info?.payment_time}</TableCell>
                                <TableCell>{info?.receipt_email}</TableCell>
                                {info?.receipt_url && <TableCell>
                                    <Link target="_blank" href={info?.receipt_url} className="flex justify-center cursor-pointer">
                                        <Receipt size={16} strokeWidth={2.5} />
                                    </Link>
                                </TableCell>}
                                {/* <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="flex justify-center">
                                                <Info size={16} strokeWidth={2.5} />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Donation Info</DialogTitle>
                                                <DialogDescription>
                                                    Make changes to your profile here. Click save when you&apos;re done.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-2 py-4">
                                                <h1>Billing Details</h1>
                                                <p>{billingObject?.name}</p>
                                                <p>{billingObject?.email}</p>
                                                <p>{billingObject?.phone}</p>
                                                <p>{billingObject?.address?.line1}</p>
                                                <p>{billingObject?.address?.line2}</p>
                                                <p>{billingObject?.address?.city}</p>
                                                <p>{billingObject?.address?.state}</p>
                                                <p>{billingObject?.address?.postal_code}</p>
                                                <p>{billingObject?.address?.country}</p>
                                            </div>
                                            <DialogFooter>
                                                <DialogClose>
                                                    <Button type="button">Close</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>

                </Table> : <div className="flex flex-col justify-center items-center min-w-screen">
                    <Icon.spinner className="h-4 w-4 animate-spin" />
                </div>
            }
        </div>
    )
}
