/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fBYsKwyCaRa
 */
import { TableCaption, TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function PaymentTable() {
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
                    <TableRow>
                        <TableCell className="font-medium">JohnDoe@example.com</TableCell>
                        <TableCell>$500.00</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>January 1, 2023</TableCell>
                        <TableCell>12:00 PM</TableCell>
                        <TableCell className="text-right">JohnDoeReceipt@example.com</TableCell>
                        <TableCell className="text-right">www.receipt-link.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">JaneSmith@example.com</TableCell>
                        <TableCell>$800.00</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>February 15, 2023</TableCell>
                        <TableCell>12:00 PM</TableCell>
                        <TableCell className="text-right">JaneSmithReceipt@example.com</TableCell>
                        <TableCell className="text-right">www.receipt-link.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">RobertJohnson@example.com</TableCell>
                        <TableCell>$1000.00</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>March 20, 2023</TableCell>
                        <TableCell>12:00 PM</TableCell>
                        <TableCell className="text-right">RobertJohnsonReceipt@example.com</TableCell>
                        <TableCell className="text-right">www.receipt-link.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">LauraWilliams@example.com</TableCell>
                        <TableCell>$700.00</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>April 25, 2023</TableCell>
                        <TableCell>12:00 PM</TableCell>
                        <TableCell className="text-right">LauraWilliamsReceipt@example.com</TableCell>
                        <TableCell className="text-right">www.receipt-link.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">MichaelBrown@example.com</TableCell>
                        <TableCell>$600.00</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>May 30, 2023</TableCell>
                        <TableCell>12:00 PM</TableCell>
                        <TableCell className="text-right">MichaelBrownReceipt@example.com</TableCell>
                        <TableCell className="text-right">www.receipt-link.com</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
