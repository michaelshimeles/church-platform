"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

export default function CheckoutCard() {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card key="1" className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Donate to our Church</CardTitle>
                    <CardDescription>Your support makes our work possible.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" {...register("name", { required: true })} />
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input {...register("email", { required: true })} placeholder="Enter your email" type="email" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="space-y-2 flex-grow">
                            <Label>Donation Amount</Label>
                            <Input {...register("amount", { required: true })} placeholder="Enter donation amount" type="number" />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="space-y-2 flex-grow">
                            <Label>Card Number</Label>
                            <Input {...register("cardNumber", { required: true })} placeholder="Enter your card number" type="text" />
                        </div>
                        <div className="space-y-2 flex-grow">
                            <Label>Expiry Date</Label>
                            <Input {...register("expiryDate", { required: true })} placeholder="MM/YY" type="text" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>CVV</Label>
                        <Input {...register("cvv", { required: true })} placeholder="3-digit code" type="text" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto" type="submit">
                        Donate
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
