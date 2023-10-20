"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { OAuthStrategy } from "@clerk/types";
import Link from "next/link";

export default function SignUpPage() {
    const { signIn } = useSignIn();

    const signInWith = (strategy: OAuthStrategy) => {
        return signIn?.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
        });
    };

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { isLoaded, signUp, setActive } = useSignUp();
    const [verifying, setVerifying] = useState<any>(false)
    const [verifyLoading, setVerifyingLoading] = useState<boolean>(false)
    const [signUpLoading, setSignUpLoading] = useState<boolean>(false)

    const [code, setCode] = useState<any>("")
    const router = useRouter()
    const { toast } = useToast()


    const onSubmit = async (data: any) => {
        setSignUpLoading(true)
        if (!isLoaded && !signUp) {
            setSignUpLoading(false)
            return null
        }
        try {
            // Start the Sign Up process using the phone number method
            await signUp.create({
                firstName: data?.firstName,
                lastName: data?.lastName,
                emailAddress: data?.email,
            });

            await signUp.prepareEmailAddressVerification();

            // Set 'verifying' true to display second form and capture the OTP code
            setSignUpLoading(false)
            setVerifying(true)
        }
        catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling for more on error handling
            console.error('Error:', JSON.stringify(err, null, 2))
            toast({
                variant: "destructive",
                title: "Sign up failed",
                description: err?.errors?.[0]?.message,
            })
            reset()
            setSignUpLoading(false)
        }

    }

    async function handleVerification(e: React.FormEvent) {
        e.preventDefault()

        if (!isLoaded && !signUp) return null

        setVerifyingLoading(true)

        try {
            // Use the code provided by the user and attempt verification
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            // This mainly for debuggin while developing.
            // Once your Instance is setup this should not be required.
            if (completeSignUp.status !== 'complete') {
                console.error(JSON.stringify(completeSignUp, null, 2))
                setVerifyingLoading(false)
            }

            // If verification was completed, create a session for the user
            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                setVerifyingLoading(false)
                // redirect user 
                router.push("/")
            }
        }
        catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling for more on error handling
            console.error('Error:', JSON.stringify(err, null, 2))
            setVerifyingLoading(false)
        }
    }

    if (verifying) {
        return (
            <div className="flex min-w-screen justify-center my-[5rem]">
                {/* <SignIn /> */}
                <Card key="1" className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Confirmation Code</CardTitle>
                        <CardDescription>We&apos;ve sent you a confirmation code to your email</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleVerification}>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Enter Code</Label>
                                    <Input value={code} id="code" name="code" onChange={(e) => setCode(e.target.value)} />
                                </div>
                                {!verifyLoading ? <Button className="w-full flex items-center" type="submit">
                                    <svg
                                        className=" mr-2 h-4 w-4"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect height="16" rx="2" width="20" x="2" y="4" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    Verify Code
                                </Button> : <Button disabled className="min-w-full">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>}
                            </div>
                        </CardContent>
                    </form>
                </Card>
            </div>
        )
    }


    return (
        <div className="flex min-w-screen justify-center my-[5rem]">
            {/* <SignIn /> */}
            <Card key="1" className="mx-auto sm:w-[375px] w-[275px] p-2">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                    <CardDescription>Sign up with your Google account</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[0.7rem]">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>First Name</Label>
                                <Input {...register("firstName", { required: true })} placeholder="Simon" required type="text" />
                            </div>
                            <div className="space-y-2">
                                <Label>Last Name</Label>
                                <Input {...register("lastName", { required: true })} placeholder="Peter" required type="text" />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input {...register("email", { required: true })} placeholder="simon@gmail.com" required type="email" />
                            </div>
                            {!signUpLoading ? <Button className="w-full flex items-center" type="submit">
                                <svg
                                    className=" mr-2 h-4 w-4"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect height="16" rx="2" width="20" x="2" y="4" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                Sign up with Email
                            </Button> : <Button disabled className="min-w-full">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>}
                        </div>
                    </form>
                    <Button className="w-full flex items-center hover:animate-shake" variant="outline" onClick={() => signInWith("oauth_google")}>
                        <svg
                            className=" mr-2 h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4" />
                            <line x1="21.17" x2="12" y1="8" y2="8" />
                            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                        </svg>
                        Sign up with Google
                    </Button>
                    <div className="flex pt-3 gap-[0.2rem]">
                        <p className="text-xs dark:text-gray-400">
                            Have an account?
                        </p>
                        <Link href="/sign-in">
                            <p className="text-xs hover:underline hover:cursor-pointer">
                                Sign In
                            </p>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
