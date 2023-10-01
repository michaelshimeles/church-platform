/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UpgQ2fSbTB0
 */
import Link from "next/link"
import Image from "next/image"
export default function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl/tight dark:text-zinc-50">
                        Join us for a life changing experience.
                    </h2>
                    <p className="max-w-[600px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                        We are a community that believes in the Life giving Lord & King Jesus Christ.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                            href="#"
                        >
                            Join Our Fellowship
                        </Link>
                    </div>
                </div>
                {/* <div className="hidden lg:block">
                    <Image alt="Grace Bible Fellowship" height="500" src="/bible.jpg" width="800" />
                </div> */}
            </div>
        </section>
    )
}
