import React from 'react'
import { Button } from './ui/button';
import { url } from 'inspector';
import Link from 'next/link';

interface HeroProps { }

const Hero: React.FC<HeroProps> = ({ }) => {
    return (
        <main className='flex flex-col items-center border-b w-full bg-fixed bg-cover bg-center bg-no-repeat lg:py-[15rem] py-[11rem]' style={{ backgroundImage: "url('/praise.jpg')" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center drop-shadow-lg text-white">
                Grace (ጸጋ) Bible Fellowship Church
            </h1>
            <h4 className="scroll-m-20 text-xl tracking-tight pt-2 drop-shadow-lg text-white">
                Grow In Grace. Grow In Knowledge.
            </h4>
            <div className='flex gap-5'>
                <Link href="/faith">
                    <Button className='mt-3'>Learn More</Button>
                </Link>
                <Link href="/faith">
                    <Button className='mt-3' variant="secondary">Statement of Faith</Button>
                </Link>
            </div>
        </main >
    );
}

export default Hero;