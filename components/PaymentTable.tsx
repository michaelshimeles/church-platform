"use client"
import { TableCaption, TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react"
import { Info, Receipt } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import * as Sentry from "@sentry/nextjs";
import { Loader2 } from 'lucide-react';

export const Icon = {
    spinner: Loader2,
};

import Link from "next/link";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
export default function PaymentTable() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [finance, setFinance] = useState<any>(null)
    const [billingInfo, setBillingInfo] = useState<any>(null)
    const [paymentInfo, setPaymentInfo] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getFinanceInfo = async () => {
            const transaction = Sentry.startTransaction({
                name: "Getting Financial Donations Info",
            });

            Sentry.configureScope((scope) => {
                scope.setSpan(transaction);
            });

            setLoading(true)
            try {

                const response = await fetch(`/api/payments/info`, {
                    method: "POST",
                    body: JSON.stringify({
                        emailAddress: user?.emailAddresses?.[0]?.emailAddress as string
                    })
                })
                const result = await response.json()

                setFinance(result)

                setLoading(false)

                return result

            } catch (error) {
                throw new Error(error as any);
                return error
            } finally {
                transaction.finish();
            }
        }

        getFinanceInfo()
    }, [user])

    const billingObject = billingInfo?.billing_details ? JSON.parse(billingInfo.billing_details) : null;
    const paymentObject = paymentInfo?.payment_details ? JSON.parse(paymentInfo.payment_details) : null;


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
            {!loading ?
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
                            <TableHead className="text-center">Receipt Link</TableHead>
                            <TableHead className="text-center">More Info</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {finance?.financials?.payments?.map((info: any, index: number) => (
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
                                <TableCell>
                                    <Link target="_blank" href={info?.receipt_url} className="flex justify-center cursor-pointer">
                                        <Receipt size={16} strokeWidth={2.5} />
                                    </Link>
                                </TableCell>
                                <TableCell>
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
                                </TableCell>
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
