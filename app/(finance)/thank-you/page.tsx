import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThankYou = ({ }) => {
    return (
        <div className="container mx-auto my-[8rem]">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Thank you for your donation
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
                You can get your receipt by checking your email or clicking the button below
            </p>
            <Link href="/donations">
                <Button className="mt-3">Donations</Button>
            </Link>
        </div>
    );
}

export default ThankYou;