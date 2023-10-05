"use client"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from '@portabletext/react'
import Image from "next/image"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const SlugPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params

    const [post, setPost] = useState<any>(null)

    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <Image src={urlForImage(value).url()} alt='' width={1090} height={1050} />
            ),
            youtube: ({ value }: {
                value: {
                    url: string
                }
            }) => {
                return (<div className="flex justify-center"><ReactPlayer url={value?.url} /></div>)
            },
        },
        block: {
            h1: ({ children }: any) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>,
            h2: ({ children }: any) => <h2 className="pt-[1rem] pb-[1rem] scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{children}</h2>,
            h3: ({ children }: any) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>,
            h4: ({ children }: any) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>,
            normal: ({ children }: any) => <p className="pb-3 leading-7 [&:not(:first-child)]:mt-1">{children}</p>,
            blockquote: ({ children }: any) => <blockquote className="my-4 border-l-2 pl-6 italic">{children}</blockquote>,
        },
        list: {
            bullet: ({ children }: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
            number: ({ children }: any) => <ol>{children}</ol>,
            checkmarks: ({ children }: any) => <ol>{children}</ol>,
        },
        listItem: {
            bullet: ({ children }: any) => <li>{children}</li>,
            number: ({ children }: any) => <li>{children}</li>,
            checkmarks: ({ children }: any) => <li>✅ {children}</li>,
        },

    }
    useEffect(() => {
        async function getData(slug: string) {
            const query = `*[_type == "post" && slug.current == "${slug}"][0] {
                title,
                  subtitle,
               author->,
                  body,
                  slug,
                  "image":mainImage.asset->,
                  "authorImage": author->.image.asset->,
                  "categories":categories[]->
              }`;

            const data = await client.fetch(query)

            setPost(data)
        }
        getData(slug)
    }, [])

    if (!post) {
        return (
            <div className="flex flex-col justify-center items-center space-x-4 min-w-screen">
                <div className="min-w-full lg:min-w-[70%] max-w-md mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="min-w-full lg:min-w-[70%] max-w-md mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="min-w-full lg:min-w-[70%] max-w-md mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="min-w-full lg:min-w-[70%] max-w-md mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
                <div className="min-w-full lg:min-w-[70%] max-w-md mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full py-[4rem] px-[2rem]">
            <div className="flex flex-col items-center min-w-fit">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">{post?.title}</h1>
                <div className="flex items-center border border-slate-700 p-2 w-[11rem] gap-1 rounded-full mt-[1rem]">
                    <Image width={34} height={31} src={post?.authorImage?.url} alt={post?.author?.name} className="w-8 h-8 rounded-full" />
                    <p className="text-center font-semibold text-sm">{post?.author?.name}</p>
                </div>
                <div className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[70%] mt-4">
                    <PortableText value={post?.body} components={PortableTextComponent} />
                </div>
            </div>
        </div>

    )
}

export default SlugPage