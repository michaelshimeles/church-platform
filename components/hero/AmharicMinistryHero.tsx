/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xE41LsKel3l
 */
import Link from "next/link"

export default function AmharicMinistryHero() {
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
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-lg text-white">ጸጋ የመጽሐፍ ቅዱስ ኅብረት ቤተ ክርስቲያን</h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-lg text-white">
                            ስለ ጌታችንና መድኀኒታችን ኢየሱስ ክርስቶስ ከአማርኛ ተናጋሪ ቤተ ክርስቲያን አባላት ጋር ለመማር፣ ለማምለክ እና ለማክበር የጸጋ የመጽሐፍ ቅዱስ ኅብረት ቤተክርስቲያንን ይቀላቀሉ።
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                            href="#weekly-page"
                        >
                            ተጨማሪ እወቅ
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
