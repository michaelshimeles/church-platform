import CTA from '@/components/CTA';
import EnglishMinistryHero from '@/components/hero/EnglishMinistryHero';
import HowWeServeCard from '@/components/card/HowWeServeCard';
import ScheduleCard from '@/components/card/ScheduleCard';
import React from 'react'

interface EnglishMinistryProps { }

const EnglishMinistryPage: React.FC<EnglishMinistryProps> = ({ }) => {
    return (
        <section>
            <EnglishMinistryHero />
            <div className='container mx-auto px-6 py-10'>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Weekly Schedule
                    </h2>
                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        <ScheduleCard eventName='Virtual Bible Study' eventLead='Michael Shimeles' eventTime="7:30pm" eventDate="Wednesday" eventAddress="Online" eventDescription={`Embark on a spiritual journey from the comfort of your home with our Virtual Bible Study sessions. Dive deep into the Word and connect with like-minded seekers online`} />
                        <ScheduleCard eventName='In-Person Bible Study & Prayer' eventLead='Michael Shimeles' eventTime="9:00pm" eventDate="Friday" eventAddress="100 Halsey Ave" eventDescription={`Join us for enriching in-person Bible study and heartfelt prayer gatherings where Jesus is glorified, and we are edified, fostering a sense of community and spiritual growth`}/>
                        <ScheduleCard eventName='Church Service' eventLead='Michael Shimeles' eventTime="4:00pm" eventDate="Sunday" eventAddress="65 Sunrise Ave" eventDescription={`Come as you are and be part of our welcoming faith community, where we worship, pray, and learn about Jesus, deepening our spiritual journey and forging lasting connections in the process.`}/>
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        How We Serve
                    </h2>

                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        <HowWeServeCard title={"Sunday Service"} description={`Our church disciples believers through biblical teaching and equipping them to fulfill their calling through service. We foster growth in faith through prayer, worship and obedience to God's commands.`} imageUrl={'/sermon.jpg'} />
                        <HowWeServeCard title={"Bible Study"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/biblestudy.jpg'} />
                        <HowWeServeCard title={"Prayer"} description={`Each week, we come together in the spirit of faith and unity to lay our hearts' desires and worries at the feet of Jesus, with humble hearts and steadfast trust, praying for healing, peace, joy, and all the fruits of the Spirit to manifest in our lives and the world around us.`} imageUrl={'/prayer.png'} />
                        <HowWeServeCard title={"Young Adults"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/young-adults.png'} />
                        <HowWeServeCard title={"Youth"} description={`Nurturing young hearts with love, we gracefully guide them towards the light of Jesus Christ, leading them through teachings, prayers, and guidance towards a life filled with faith in the Lord..`} imageUrl={'/youth.png'} />
                        <HowWeServeCard title={"Kids"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/kids.png'} />
                        <HowWeServeCard title={"Baptism"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/bapt.png'} />
                        <HowWeServeCard title={"Cell Groups"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/family.jpeg'} />
                    </div>
                </div>
                <CTA />
            </div>
        </section>
    );
}

export default EnglishMinistryPage;