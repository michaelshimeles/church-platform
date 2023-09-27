import React from 'react'
import { Button } from './ui/button';

interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({ }) => {
    return (
        <main className='flex flex-col items-center border-b w-full py-[10rem]'>
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-center">
                Welcome to Grace
            </h1>
            <h4 className="scroll-m-20 text-xl tracking-tight pt-2">
                Grow In Grace. Grow In Knowledge.
            </h4>
            <Button className='mt-3'>Learn More</Button>
        </main>
    );
}

export default Hero;