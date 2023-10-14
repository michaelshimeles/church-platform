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

export default function RegisterPage() {
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
        if (!isLoaded && !signIn) return null
        try {

        }
        catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling for more on error handling
            console.error('Error:', JSON.stringify(err, null, 2))
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
                        <CardDescription>We've sent you a confirmation code to your email</CardDescription>
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
            <Card key="1" className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email below to login your account</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="space-y-4">
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
                                Login with Email
                            </Button> : <Button disabled className="min-w-full">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>}
                        </div>
                    </CardContent>
                </form>
                <CardFooter>
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
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
