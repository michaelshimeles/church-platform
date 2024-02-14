import PaymentTable from '@/components/PaymentTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

interface DonationProps { }

const Donations: React.FC<DonationProps> = ({ }) => {
    return (
        <section className="flex flex-col gap-3 min-w-full justify-center items-center min-h-[70vh] mt-[4rem]">
            <div className='flex flex-col w-[80%] mb-[8rem]'>
                <PaymentTable />
            </div>
        </section>
    );
}

export default Donations;