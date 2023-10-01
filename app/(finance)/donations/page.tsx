import PaymentTable from '@/components/PaymentTable';
import React from 'react'

interface DonationProps {}

const Donations: React.FC<DonationProps> = ({ }) => {
    return (
        <section className="container px-4 mx-auto min-h-screen py-[3rem]">
            <PaymentTable />
        </section>
    );
}

export default Donations;