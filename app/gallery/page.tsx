"use client"
import { ParallaxScroll } from "../../components/ui/parallax-scroll";

const images = [
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4656.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4661.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/ssjjj%20(1).png?t=2024-01-10T03%3A18%3A30.750Z",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4656.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4661.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/ssjjj%20(1).png?t=2024-01-10T03%3A18%3A30.750Z",
];

const images1 = [
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4656.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4661.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/ssjjj%20(1).png?t=2024-01-10T03%3A18%3A30.750Z",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4656.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/IMG_4661.jpg",
    "https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/ssjjj%20(1).png?t=2024-01-10T03%3A18%3A30.750Z",
];

const Gallery = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-[6rem] p-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Church Events Gallery
            </h1>
            <div className="flex flex-col mt-[4rem]">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Baptism
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Date: July 2024
                </p>
                <ParallaxScroll images={images} />
            </div>
            <div className="flex flex-col mt-[4rem]">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Birthday
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Date: July 2024
                </p>
                <ParallaxScroll images={images1} />
            </div>
        </div>
    );
}

export default Gallery;