"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"

function CardWithForm() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>Study the Word of God with ease.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This tool is being developed and will be launched soon!</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href="/">
                    <Button>Back Home</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function BibleStudyTool() {
    return (
        <div key="1" className="relative grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40">
                <div className="flex flex-col gap-2">
                    <div className="flex h-[60px] items-center px-6">
                        <Link className="flex items-center gap-2 font-semibold" href="#">
                            <svg
                                className=" h-6 w-6"
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
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                            </svg>
                            <span>Bible Study Dashboard</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
                                href="#"
                            >
                                <svg
                                    className=" h-4 w-4"
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
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Home
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="#"
                            >
                                <svg
                                    className=" h-4 w-4"
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
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                </svg>
                                Bookmarks
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="#"
                            >
                                <svg
                                    className=" h-4 w-4"
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
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                Search Verses
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="#"
                            >
                                <svg
                                    className=" h-4 w-4"
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
                                    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                                    <line x1="16" x2="16" y1="2" y2="6" />
                                    <line x1="8" x2="8" y1="2" y2="6" />
                                    <line x1="3" x2="21" y1="10" y2="10" />
                                </svg>
                                Reading Plan
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-auto">
                <header className="sticky top-0 flex h-[60px] items-center border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40">
                    {/* <h1 className="font-semibold text-lg">Bible Study Dashboard</h1> */}
                    <div className="ml-auto relative">
                        <svg
                            className=" absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400"
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
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <Input className="w-full appearance-none pl-8" placeholder="Search..." type="search" />
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="h-20 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800">
                        {/* <p>Verse of the Day</p> */}
                    </div>
                    <div className="flex-1 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800">
                        {/* <p>Reading Plan</p> */}
                    </div>
                </main>
            </div>
            <div className="absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex items-center justify-center p-2">
                <CardWithForm />
            </div>
        </div>
    )
}