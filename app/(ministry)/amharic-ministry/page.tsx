import CTA from '@/components/CTA';
import AmharicMinistryHero from '@/components/hero/AmharicMinistryHero';
import HowWeServeCard from '@/components/card/HowWeServeCard';
import ScheduleCard from '@/components/card/ScheduleCard';
import React from 'react'

interface AmharicMinistryPageProps { }

const AmharicMinistryPage: React.FC<AmharicMinistryPageProps> = ({ }) => {
    return (
        <section>
            <AmharicMinistryHero />
            <div className='container mx-auto px-6 py-10'>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        ሳምንታዊ መርሐግብር
                    </h2>
                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        <ScheduleCard eventName='Virtual Bible Study' eventLead='Michael Shimeles' eventTime="7:30pm" eventDate="Wednesday" eventAddress="Online" eventDescription={`Embark on a spiritual journey from the comfort of your home with our Virtual Bible Study sessions. Dive deep into the Word and connect with like-minded seekers online`} />
                        <ScheduleCard eventName='In-Person Bible Study & Prayer' eventLead='Michael Shimeles' eventTime="9:00pm" eventDate="Friday" eventAddress="100 Halsey Ave" eventDescription={`Join us for enriching in-person Bible study and heartfelt prayer gatherings where Jesus is glorified, and we are edified, fostering a sense of community and spiritual growth`} />
                        <ScheduleCard eventName='Church Service' eventLead='Michael Shimeles' eventTime="4:00pm" eventDate="Sunday" eventAddress="65 Sunrise Ave" eventDescription={`Come as you are and be part of our welcoming faith community, where we worship, pray, and learn about Jesus, deepening our spiritual journey and forging lasting connections in the process.`} />
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        እንዴት እንደምናገለግል
                    </h2>

                    <div className='flex flex-wrap justify-center mt-[2rem] gap-4'>
                        <HowWeServeCard title={"የእሁድ አገልግሎት"} description={`የቤተ ክርስቲያናችን ደቀመዛሙርት አማኞች በመጽሐፍ ቅዱሳዊ ትምህርት እና ጥሪያቸውን በአገልግሎት እንዲፈጽሙ በማስታጠቅ። በጸሎት፣ በአምልኮ እና የእግዚአብሔርን ትእዛዝ በመታዘዝ የእምነት እድገትን እናሳድጋለን።.`} imageUrl={'/sermon.jpg'} />
                        <HowWeServeCard title={"የመጽሐፍ ቅዱስ ጥናት"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/biblestudy.jpg'} />
                        <HowWeServeCard title={"ጸሎት"} description={`በየሳምንቱ፣ በየሳምንቱ፣ የልባችንን ፍላጎት እና ጭንቀቶችን በኢየሱስ እግር ስር ለማስቀመጥ በእምነት እና በአንድነት መንፈስ እንሰበሰባለን፣ በትሑት ልቦች እና ጽኑ እምነት፣ ለፈውስ፣ ሰላም፣ ደስታ እና የመንፈስ ፍሬዎች ሁሉ በህይወታችን እና በዙሪያችን ባለው ዓለም ውስጥ ይገለጣል.`} imageUrl={'/prayer.png'} />
                        <HowWeServeCard title={"ጥምቀት"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/bapt.png'} />
                        <HowWeServeCard title={"Cell Groups"} description={`The large, corporate gathering of our church community every Sunday.`} imageUrl={'/family.jpeg'} />
                    </div>
                </div>
                <CTA />
            </div>
        </section>
    );
}

export default AmharicMinistryPage;