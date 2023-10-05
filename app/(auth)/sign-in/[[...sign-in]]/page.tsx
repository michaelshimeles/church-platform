"use client"
import { CardHeader, CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";

export default function SignInPage() {

    const { isLoaded, signIn, setActive } = useSignIn();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        await signIn?.create({
            identifier: data?.email,
        }).then((result) => {
            if (result.status === "complete") {
                console.log(result);
                setActive({ session: result.createdSessionId });
            } else {
                console.log(result);
            }
        }).catch((err) => console.error("error", err.errors[0].longMessage));
    }


    return (
        <div className="flex min-w-screen justify-center my-[5rem]">
            {/* <SignIn /> */}
            <Card key="1" className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input {...register("email", { required: true })} placeholder="m@example.com" required type="email" />
                            </div>
                            <Button className="w-full flex items-center" type="submit">
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
                            </Button>
                            <Button className="w-full flex items-center hover:animate-shake" variant="outline">
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
                        </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}
