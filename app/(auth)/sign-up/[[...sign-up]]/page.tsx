import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-w-screen justify-center py-[5rem]">
            <SignUp />
        </div>
    );
}