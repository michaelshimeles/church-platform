import React from 'react';
import AmharicMinistryHero from '@/components/hero/AmharicMinistryHero';
import ScheduleCard from '@/components/card/ScheduleCard';
import HowWeServeCard from '@/components/card/HowWeServeCard';
import CTA from '@/components/CTA';

const AmharicMinistryPage: React.FC = () => {
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

    const howWeServeItems = [
        {
            title: 'የእሁድ አገልግሎት',
            description: `የቤተ ክርስቲያናችን ደቀመዛሙርት አማኞች በመጽሐፍ ቅዱሳዊ ትምህርት እና ጥሪያቸውን በአገልግሎት እንዲፈጽሙ በማስታጠቅ።`,
            imageUrl: 'https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/sermon.jpg',
        },
        {
            title: 'የመጽሐፍ ቅዱስ ጥናት',
            description: 'The large, corporate gathering of our church community every Sunday.',
            imageUrl: 'https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/biblestudy.jpg',
        },
        {
            title: 'ጸሎት',
            description: `በየሳምንቱ፣ በየሳምንቱ፣ የልባችንን ፍላጎት እና ጭንቀቶችን በኢየሱስ እግር ስር ለማስቀመጥ በእምነት እና በአንድነት መንፈስ እንሰበሰባለን፣ በትሑት ልቦች እና ጽኑ እምነት፣ ለፈውስ፣ ሰላም፣ ደስታ እና የመንፈስ ፍሬዎች ሁሉ በህይወታችን እና በዙሪያችን ባለው ዓለም ውስጥ ይገለጣል.`,
            imageUrl: 'https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/prayer.png',
        },
        {
            title: "ጥምቀት",
            description: `The large, corporate gathering of our church community every Sunday`,
            imageUrl: 'https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/bapt.png'

        },
        {
            title: "Cell Groups",
            description: `The large, corporate gathering of our church community every Sunday.`,
            imageUrl: 'https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/family.jpeg'

        }
    ];

    return (
        <section>
            <AmharicMinistryHero />
            <div className='container mx-auto px-6 py-10'>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        ሳምንታዊ መርሐግብር
                    </h2>
                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        {scheduleItems.map((item, index) => (
                            <ScheduleCard key={index} {...item} />
                        ))}
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        እንዴት እንደምናገለግል
                    </h2>
                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        {howWeServeItems.map((item, index) => (
                            <HowWeServeCard key={index} {...item} />
                        ))}
                    </div>
                </div>
                <CTA />
            </div>
        </section>
    );
}

export default AmharicMinistryPage
