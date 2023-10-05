"use client"
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"

interface ResourceProps {

}

const Resources: React.FC<ResourceProps> = ({ }) => {
    const [post, setPost] = useState<any>(null)

    /*
        Use tanstack query for blog caching
    */
    useEffect(() => {
        async function getData() {
            const query = `*[ 
                _type == "post" 
              ] {
                title,
                  subtitle,
               author->,
                  body,
                  slug,
                  "image":mainImage.asset->,
                  "authorImage": author->.image.asset->,
                  "categories":categories[]->
              }`;

            try {
                const data = await client.fetch(query)
                setPost(data)

            } catch (error) {
                console.log("First Error", error)
            }


        }
        getData()
    }, [])

    if (!post) {
        return (
            <section className="w-full mb-8 md:p-[5rem] lg:p-[10rem] md:flex lg:block" data-id="23">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="61">
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
                        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
                        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </div>
            </section>
        )
    }

    console.log("Post", post)
    return (
        <section className="w-full" data-id="1">
            <main className="container mx-auto px-4 md:px-6 py-8">
                <h2 className="text-3xl font-bold mb-8 mt-8">
                    Grace Bible Fellowship Blog
                </h2>
                <section className="mb-8" data-id="23">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="61">
                        {post?.map((post: any, index: number) => {
                            return (
                                <div key={index}>
                                    <Image
                                        alt="Blog Post Image"
                                        className="w-full h-64 object-cover object-center rounded-lg"
                                        height={400}
                                        src={post?.image?.url}
                                        width={600}
                                    />
                                    <h3 className="text-xl font-bold mb-2 mt-4" data-id="64">
                                        {post?.title}
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400" data-id="65">
                                        {post?.subtitle}
                                    </p>
                                    <Link href={`/resources/blog/${post?.slug?.current}`} className="text-blue-500 hover:text-blue-700 mt-4" data-id="66">
                                        Read More
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </section>
    );
}

export default Resources;