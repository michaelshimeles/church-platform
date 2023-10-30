import PaymentTable from '@/components/PaymentTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

interface DonationProps { }

const Donations: React.FC<DonationProps> = ({ }) => {
    return (
        <section className="flex flex-col gap-3 min-w-full justify-center items-center min-h-[70vh]">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Donations page is getting a revamp
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-1">
                If you are looking for your donation receipts, please check your email
            </p>
            <Link href="/">
                <Button>Go Home</Button>
            </Link>
            {/* <PaymentTable /> */}
        </section>
    );
}

export default Donations;