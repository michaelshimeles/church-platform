"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { OAuthStrategy, SignInFirstFactor, EmailCodeFactor } from "@clerk/types";
import Link from "next/link";

export default function SignInPage() {
    const { signIn, isLoaded, setActive } = useSignIn();

    const signInWith = (strategy: OAuthStrategy) => {
        return signIn?.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
        });
    };

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const {
        register: registerVerify,
        formState: { errors: errorsVerify },
        handleSubmit: handleSubmitVerify,
    } = useForm();

    const [verifying, setVerifying] = useState<boolean>(false)
    const [verifyLoading, setVerifyingLoading] = useState<boolean>(false)
    const [signInLoading, setSignInLoading] = useState<boolean>(false)
    const router = useRouter()
    const { toast } = useToast()


    const onSubmit = async (data: any) => {
        setSignInLoading(true)
        if (!isLoaded && !signIn) {
            setSignInLoading(false)
            console.log("isLoaded", isLoaded)
            console.log("signIn", signIn)
            return null
        }
        try {
            console.log("Starting Email")
            const { supportedFirstFactors }: any = await signIn?.create({
                strategy: "email_code",
                identifier: `${data?.email}`,
            });

            // // Filter the returned array to find the 'email_code' entry
            const isEmailCodeFactor = (
                factor: SignInFirstFactor
            ): factor is EmailCodeFactor => {
                return factor.strategy === "email_code";
            };

            const emailCodeFactor = supportedFirstFactors?.find(isEmailCodeFactor);

            if (emailCodeFactor) {
                console.log("Preparing to send email");  // Debugging line

                // Grab the emailAddressId
                const { emailAddressId } = emailCodeFactor

                // Send the OTP code to the user
                await signIn?.prepareFirstFactor({
                    strategy: 'email_code',
                    emailAddressId
                })

                console.log("Sending Email")

                // Set 'verifying' true to display second form and capture the OTP code
                setVerifying(true)
                setSignInLoading(false)
            }
        }
        catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling for more on error handling
            console.error('Error:', JSON.stringify(err, null, 2))
            setSignInLoading(false)
            toast({
                title: "Error Signing In",
                description: err?.errors?.[0]?.longMessage,
                variant: "destructive"
            })
        }
    }

    const onSubmitVerify = async (data: any) => {
        if (!isLoaded && !signIn) return null

        setVerifyingLoading(true)
        try {
            // Use the code provided by the user and attempt verification
            const completeSignIn = await signIn?.attemptFirstFactor({
                strategy: 'email_code',
                code: data?.code,
            });

            // This mainly for debuggin while developing.
            // Once your Instance is setup this should not be required.
            if (completeSignIn?.status !== 'complete') {
                console.error(JSON.stringify(completeSignIn, null, 2))
                setVerifyingLoading(false)
            }

            // If verification was completed, create a session for the user
            if (completeSignIn?.status === 'complete') {
                await setActive({ session: completeSignIn?.createdSessionId });

                setVerifyingLoading(false)
                // redirect user 
                router.push("/")
            }
        }
        catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling for more on error handling
            console.error('Error:', JSON.stringify(err, null, 2))
            setVerifyingLoading(false)
            toast({
                title: "Error Signing In",
                description: err?.errors?.[0]?.longMessage,
                variant: "destructive"
            })
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
                    <form onSubmit={handleSubmitVerify(onSubmitVerify)}>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Enter Code</Label>
                                    <Input  {...registerVerify("code", { required: true })} />
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
            <Card key="1" className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                    <CardDescription>Enter your email below to sign in with your account</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[0.7rem]">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input {...register("email", { required: true })} placeholder="simon@gmail.com" required type="email" />
                            </div>
                            {!signInLoading ? <Button className="w-full flex items-center" type="submit">
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
                                Sign in with Email
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
                        Continue with Google
                    </Button>
                    <div className="flex pt-3 gap-[0.2rem]">
                        <p className="text-xs dark:text-gray-400">
                            No Account?
                        </p>
                        <Link href="/sign-up">
                            <p className="text-xs hover:underline hover:cursor-pointer">
                                Sign Up
                            </p>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
