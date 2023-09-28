import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center min-h-screen pt-[10rem]">
            <SignUp />
        </div>
    );
}