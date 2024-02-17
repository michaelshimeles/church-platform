import Image from "next/image";

const AboutUs = () => {
    const senior_team = [{
        name: "Pastor Berhanu",
        position: "Senior Pastor",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/pb.png`
    },
    {
        name: "Pastor Almaz",
        position: "Executive Pastor",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/hawie.png`
    },
    {
        name: "Pastor Simon",
        position: "Pastor",
        src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/simon.png`

    }]

    const team = [
        {
            name: "Bizuye Ayenew",
            position: "Deacon Ministry",
            src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/bizu.png`

        },
        {
            name: "Juliyata Mekonen",
            position: "Worship Ministry",
            src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/juliye.png`

        },
        {
            name: "Tsega Kebede",
            position: "Evangelism Ministry",
            src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/tsegaye.png`

        }
        , {
            name: "Michael Shimeles",
            position: "Youth Pastor",
            src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/mike.png`

        }
    ]

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
                    Our Senior Team</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {senior_team?.map((member) => (<div key={member?.name} className="flex flex-col items-center p-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent">
                        <Image width={120} height={130} className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={member?.src} alt="" />

                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white">{member?.name}</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{member?.position}</p>
                    </div>))}
                </div>
            </div>
            <div className='mt-[3rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Leadership Team</h1>
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