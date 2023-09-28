import React from 'react'
import { Button } from './ui/button';
import { url } from 'inspector';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({ }) => {
    return (
        <main className='flex flex-col items-center border-b w-full bg-fixed bg-cover bg-center bg-no-repeat lg:py-[15rem] py-[11rem]' style={{ backgroundImage: "url('/praise.jpg')" }}>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-center drop-shadow-lg text-white">
                Welcome to Grace
            </h1>
            <h4 className="scroll-m-20 text-xl tracking-tight pt-2 drop-shadow-lg text-white">
                Grow In Grace. Grow In Knowledge.
            </h4>
            <div className='flex gap-5'>
                <Button className='mt-3'>Learn More</Button>
                <Button className='mt-3' variant="secondary">Statement of Faith</Button>
            </div>
        </main >
    );
}

export default Hero;