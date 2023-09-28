"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactUs() {
    return (
        <div className="flex items-center justify-center p-2" data-id="1">
            <Card data-id="2">
                <CardContent data-id="3">
                    <div className="space-y-8 pt-7" data-id="4">
                        <div className="space-y-2" data-id="5">
                            <h2 className="text-3xl font-semibold" data-id="6">
                                Contact Us
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-400" data-id="7">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="space-y-4" data-id="8">
                            <div className="grid grid-cols-2 gap-4" data-id="9">
                                <div className="space-y-2" data-id="10">
                                    <Label data-id="11" htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input data-id="12" id="first-name" placeholder="Enter your first name" />
                                </div>
                                <div className="space-y-2" data-id="13">
                                    <Label data-id="14" htmlFor="last-name">
                                        Last name
                                    </Label>
                                    <Input data-id="15" id="last-name" placeholder="Enter your last name" />
                                </div>
                            </div>
                            <div className="space-y-2" data-id="16">
                                <Label data-id="17" htmlFor="email">
                                    Email
                                </Label>
                                <Input data-id="18" id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div className="space-y-2" data-id="31">
                                <Label data-id="32" htmlFor="message">
                                    Message
                                </Label>
                                <Textarea className="min-h-[100px]" data-id="33" id="message" placeholder="Enter your message" />
                            </div>
                            <Button type="submit">
                                Send message
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
