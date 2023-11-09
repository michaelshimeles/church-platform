import Image from "next/image";

const AboutUs = () => {
    const team = [{
        name: "Pastor Berhanu & Pastor Almaz",
        position: "Senior & Executive Pastor",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/almiyeandpastor.png`
    }, {
        name: "Pastor Simon",
        position: "Administrative Coordinator",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/placeholder.png`

    }, {
        name: "Michael Shimeles",
        position: "Youth Pastor",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/mike.png`

    }]

    return (
        <section className='container px-6 py-10 mx-auto'>
            <div className='mt-[1rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Vision
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    At Grace (ፀጋ) Bible Fellowship Church, we believe that the process of becoming a disciple of Jesus is a lifelong journey of growth and transformation.

                    Our vision is to create a dynamic fellowship of believers who seek to connect with God, grow in their relationship with Jesus Christ, and serve others with love and compassion. We aim to be a supportive community where people can explore their faith, deepen their understanding of the Bible, and learn how to apply its teachings to their everyday lives. Our goal is to help our members become fully devoted followers of Jesus and to empower them to lead and impact in every sphere of life.
                </p>

            </div>
            <div className='mt-[3rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Team</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {team?.map((member) => (<div key={member?.name} className="flex flex-col items-center p-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <Image width={120} height={130} className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={member?.src} alt="" />

                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white">{member?.name}</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{member?.position}</p>
                    </div>))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;