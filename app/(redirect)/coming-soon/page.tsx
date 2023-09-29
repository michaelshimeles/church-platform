import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

interface ComingSoonProps {

}

const ComingSoonPage: React.FC<ComingSoonProps> = ({ }) => {
    return (
        <section className='flex flex-col justify-center items-center min-w-screen min-h-[50rem] gap-8'>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
                Coming Soon
            </h1>
            <div className='flex gap-4'>
                <Link href="/">
                    <Button variant="outline">Back Home</Button>
                </Link>
                <Link href="/contact-us">
                    <Button>Contact Us</Button>
                </Link>
            </div>
        </section>
    );
}

export default ComingSoonPage;