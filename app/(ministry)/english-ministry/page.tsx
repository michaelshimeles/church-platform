"use client"
import CTA from '@/components/CTA';
import EnglishMinistryHero from '@/components/hero/EnglishMinistryHero';
import HowWeServeCard from '@/components/card/HowWeServeCard';
import ScheduleCard from '@/components/card/ScheduleCard';
import React from 'react'


const EnglishMinistryPage = ({ }) => {
    const scheduleItems = [
        {
            eventName: 'Virtual Bible Study',
            eventLead: 'Michael Shimeles',
            eventTime: '7:30pm',
            eventDate: 'Wednesday',
            eventAddress: 'Online',
            eventDescription: `Embark on a spiritual journey from the comfort of your home with our Virtual Bible Study sessions. Dive deep into the Word and connect with like-minded seekers online`,
        },
        {
            eventName: 'In-Person Bible Study & Prayer',
            eventLead: 'Michael Shimeles',
            eventTime: '9:00pm',
            eventDate: 'Friday',
            eventAddress: '100 Halsey Ave',
            eventDescription: `Join us for enriching in-person Bible study and heartfelt prayer gatherings where Jesus is glorified, and we are edified, fostering a sense of community and spiritual growth`,
        },
        {
            eventName: 'Church Service',
            eventLead: 'Michael Shimeles',
            eventTime: '4:00pm',
            eventDate: 'Sunday',
            eventAddress: '65 Sunrise Ave',
            eventDescription: `Come as you are and be part of our welcoming faith community, where we worship, pray, and learn about Jesus, deepening our spiritual journey and forging lasting connections in the process.`,
        },
        // Add more schedule items as needed
    ];

    const servingInfo = [
        {
            title: "Sunday Service",
            description: "Our church disciples believers through biblical teaching and equipping them to fulfill their calling through service. We foster growth in faith through prayer, worship and obedience to God's commands.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/sermon.jpg`
        },
        {
            title: "Bible Study",
            description: "Bible Study is important for Christians because it deepens their faith, strengthens their relationship with God, and provides guidance for living a righteous life.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/biblestudy.jpg`
        },
        {
            title: "Prayer",
            description: "Each week, we come together in the spirit of faith and unity to lay our hearts' desires and worries at the feet of Jesus, with humble hearts and steadfast trust, praying for healing, peace, joy, and all the fruits of the Spirit.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/prayer.png`
        },
        {
            title: "Young Adults",
            description: "Guiding young adults with love and wisdom, we help them discover the path to a faith-filled life in Jesus Christ through teachings, prayers, and guidance, nurturing their hearts along the way.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/young-adults.png`
        },
        {
            title: "Youth",
            description: "Nurturing young hearts with love, we gracefully guide them towards the light of Jesus Christ, leading them through teachings, prayers, and guidance towards a life filled with faith in the Lord.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/youth.png`
        },
        {
            title: "Kids",
            description: "Gently leading children with love and care, we introduce them to the joy of Jesus Christ, using age-appropriate teachings, prayers, and guidance to nurture their budding faith.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/kids.png`
        },
        {
            title: "Baptism",
            description: "Baptism is a significant spiritual act symbolizing one's public declaration of faith in Jesus Christ, repentance of sins, and a commitment to follow Him, performed through immersion in water.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/bapt.png`
        },
        {
            title: "Cell Groups",
            description: "Join our close-knit cell groups for meaningful fellowship, spiritual growth, and support on your faith journey.",
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/family.jpeg`
        },
    ]
    return (
        <section>
            <EnglishMinistryHero />
            <div className='container mx-auto px-6 py-10'>
                <div className='mt-[3rem]' id='weekly'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Weekly Schedule
                    </h2>
                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        {scheduleItems?.map((info, index) => (
                            <ScheduleCard key={index} {...info} />
                        ))}
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        How We Serve
                    </h2>

                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        {servingInfo?.map((info, index) => (
                            <HowWeServeCard key={index} {...info} />
                        ))}

                    </div>
                </div>
                <CTA ministry='english'/>
            </div>
        </section>
    );
}

export default EnglishMinistryPage;