"use client"
import { TableCaption, TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react"

export default function PaymentTable() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [finance, setFinance] = useState<any>(null)
    useEffect(() => {
        const getFinanceInfo = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/payments/info`, {
                method: "POST",
                body: JSON.stringify({
                    emailAddress: user?.emailAddresses?.[0]?.emailAddress as string
                })
            })
            const result = await response.json()

            setFinance(result)

            return result
        }

        getFinanceInfo()
    }, [user])

    console.log("finance", finance?.financials?.payments)
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
            <Table>
                <TableCaption>Financial Donations to the Church</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Currency</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-right">Receipt Email</TableHead>
                        <TableHead className="text-right">Receipt Link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {finance?.financials?.payments.length > 0 && finance?.financials?.payments?.map((info: any) => {
                        <TableRow>
                            <TableCell className="font-medium">{finance?.financials?.payments?.[0].email}</TableCell>
                            <TableCell>{Number(finance?.financials?.payments?.[0]?.amount) / 100}</TableCell>
                            <TableCell>{finance?.financials?.payments?.[0]?.currency}</TableCell>
                            <TableCell>{finance?.financials?.payments?.[0]?.payment_date}</TableCell>
                            <TableCell>{finance?.financials?.payments?.[0]?.payment_time}</TableCell>
                            <TableCell className="text-right">{finance?.financials?.payments?.[0]?.receipt_email}</TableCell>
                            <TableCell className="text-right">{finance?.financials?.payments?.[0]?.receipt_url.substr(8, 40)}...</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
