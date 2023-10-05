/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xE41LsKel3l
 */
import Link from "next/link"
import { Button } from "../ui/button"

export default function EnglishMinistryHero() {
    return (
        <section
            className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center           "
            style={{
                backgroundImage: "url(https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/background.webp?height=1920&width=1920)",
            }}
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-lg text-white">Grace Bible Fellowship Church</h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-lg text-white">
                            Join us in our English speaking church as learn about, praise, worship, & glorify our Lord & Saviour Jesus Christ. All ages are welcome!
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Link 
                        href="#"
                        >
                            <Button variant="outline">Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
