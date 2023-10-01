import React from 'react'

interface AboutUsProps {

}

const AboutUs: React.FC<AboutUsProps> = ({ }) => {
    return (
        <section className='container px-6 py-10 mx-auto'>
            <div className='mt-[1rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Vision
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    At Tsega Bible Fellowship Church, we believe that the process of becoming a disciple of Jesus is a lifelong journey of growth and transformation.

                    Our vision is to create a dynamic fellowship of believers who seek to connect with God, grow in their relationship with Jesus Christ, and serve others with love and compassion. We aim to be a supportive community where people can explore their faith, deepen their understanding of the Bible, and learn how to apply its teachings to their everyday lives. Our goal is to help our members become fully devoted followers of Jesus and to empower them to lead and impact in every sphere of life.
                </p>

            </div>
            <div className='mt-[3rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Team</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="/pastor-berhanu.jpg" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Pastor Berhanu</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Senior Pastor</p>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Pastor Almaz</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Execute Pastor</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="/grace.png" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Grace Woldegiorgis</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Worship Pastor</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="/bezuye.png" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Bizuye Gebre Medhin</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Deacon Pastor</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Pastor Simon</h1>
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Administrative Pastor</p>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group dark:border-gray-700 dark:hover:border-transparent">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="/mike.png" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Michael Shimeles</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Youth Pastor</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;