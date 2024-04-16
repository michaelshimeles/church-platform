"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import { DollarSignIcon, Info, Loader2, Receipt, UsersIcon } from "lucide-react";
import { useEffect, useState } from "react";
import * as Sentry from "@sentry/nextjs";

export const Icon = {
    spinner: Loader2,
};

import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Button } from "./ui/button";
import { useGetDonations } from "@/utils/hooks/useGetDonations";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
export default function PaymentTable() {
    const { user } = useUser();


    const { data, isLoading } = useGetDonations(user?.emailAddresses?.[0]?.emailAddress as string, user)

    let CAD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    });

    let totalAmount = 0
    const result = data?.financials?.payments?.map((info: any) => totalAmount = (totalAmount + Number(info?.amount) / 100))

    console.log('data', data?.financials?.payments)

    return (
        <div className="flex flex-col gap-5 w-full">
            <div>
                <div className="flex justify-between items-center w-full">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Donations Tracking
                    </h1>
                    <Link href={`${process.env.NEXT_PUBLIC_STRIPE_LINK}`} target='_blank'>
                        <Button className='w-full'>Donate</Button>
                    </Link>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    Track all your donations to our church
                </p>
            </div>
            <div className="flex justify-center items-center w-full gap-4 flex-wrap	md:flex-nowrap">
                <Card className="flex flex-col w-full">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Total Amount Donated</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{CAD.format(totalAmount)}</div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col w-full">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Total Number of Donations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data?.financials?.payments ? data?.financials?.payments?.length : 0}</div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col w-full">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Last Donation Amount</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data?.financials?.payments ? CAD.format(Number(data?.financials?.payments[0]?.amount) / 100) : 0}</div>
                    </CardContent>
                </Card>
            </div>
            {!isLoading ?
                <Table className="border">
                    <TableCaption>Financial Donations to the Church</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Amount</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Receipt Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.financials?.payments?.sort((a: any, b: any) => {
                            const dateA = new Date(`${a.payment_date} ${a.payment_time}`).getTime();
                            const dateB = new Date(`${b.payment_date} ${b.payment_time}`).getTime();
                            return dateB - dateA;
                        }
                        )?.map((info: any, index: number) => (
                            <TableRow key={index}>
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
                            </TableRow>
                        ))}
                    </TableBody>

                </Table> : <div className="flex flex-col justify-center items-center min-w-screen my-[13rem]">
                    <Icon.spinner className="h-4 w-4 animate-spin" />
                </div>
            }
        </div>
    )
}
