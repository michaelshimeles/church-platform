import React from 'react';
import AmharicMinistryHero from '@/components/hero/AmharicMinistryHero';
import ScheduleCard from '@/components/card/ScheduleCard';
import HowWeServeCard from '@/components/card/HowWeServeCard';
import CTA from '@/components/CTA';

const AmharicMinistryPage: React.FC = () => {
    const scheduleItems = [
        {
            eventName: 'የቤተክርስቲያን አገልግሎት',
            eventLead: 'Michael Shimeles',
            eventTime: '3:30pm',
            eventDate: 'Sunday',
            eventAddress: '65 Sunrise Ave',
            eventDescription: `እግዚአብሔርን በማምለክ፣ በመጸለይ እና ስለ ኢየሱስ ክርስቶስ ያለንን ግንዛቤ በምናሳድግበት አንድ ላይ በምንሰባሰብበት ትርጉም ያለው ፕሮግራም ላይ ይቀላቀሉን።`,
        },
        {
            eventName: 'በአካል የመጽሐፍ ቅዱስ ጥናት እና ጸሎት',
            eventLead: 'Michael Shimeles',
            eventTime: '9:00pm',
            eventDate: 'Friday',
            eventAddress: '100 Halsey Ave',
            eventDescription: `በአካል በመገናኘት በምናደርገው የመጽሐፍ ቅዱስ ጥናት ላይ ይቀላቀሉን። በዚህ ጊዜ ኢየሱስን የምናከብርበት፣ እራሳችንን የምናንጽበት እና መንፈሳዊ ማንነታችንን የምናዳብርበት በአካል ለምናደርገው የመጽሐፍ ቅዱስ ጥናት እና ጸሎታችን ይቀላቀሉን።
            `,
        },
        {
            eventName: 'ኦንላይን የመጽሐፍ ቅዱስ ጥናት',
            eventLead: 'Michael Shimeles',
            eventTime: '7:30pm',
            eventDate: 'Weekly',
            eventAddress: 'Online',
            eventDescription: `ኦንላይን በመገናኘት በምናደርገው የመጽሐፍ ቅዱስ ጥናት ላይ ይቀላቀሉን። የመጽሐፍ ቅዱስ ጥናት ክፍለ ጊዜዎች ከቤትዎ ሆነው መንፈሳዊ ጉዞ ይጀምሩ። በስልክ ቁጥር 416-839-7968 ወይም 647-608-8189
            ዕሮብ 7፡30 PM`,
        },
        // Add more schedule items as needed
    ];

    const howWeServeItems = [
        {
            title: 'የእሁድ አገልግሎት',
            description: `የቤተ ክርስቲያናችንን አባሎች በመጽሐፍ ቅዱሳዊ ትምህርት ደቀመዛሙርት ማድረግና ጥሪያቸውን በሚገባ አውቀው አምላካቸውን እንዲያገለግሉ ማስታጠቅ እና በጸሎት፣ በአምልኮ እና የእግዚአብሔርን ትእዛዝ እንዲታዘዙ የአባሎቻችንን እምነት እናሳድጋለን።
            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/sermon.jpg`,
        },
        {
            title: 'የመጽሐፍ ቅዱስ ጥናት',
            description: 'የመጽሐፍ ቅዱስ ጥናት ለክርስቲያኖች በጣም አስፈላጊ ነው ምክንያቱም አማኞች እምነታቸውን እንዲያድግ ፤ ከአምላካቸው ጋር ያላቸውን ዝምድና እንዲጠነክርና የጽድቅን ሕይወት እንዲመሩ እናስጠናቸዋለን።            ',
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/biblestudy.jpg`,
        },
        {
            title: 'ጸሎት',
            description: `በየሳምንቱ በእምነት እና በአንድነት መንፈስ በአምላካችን እግር ሥር ልባችንን ለማፍሰስ እንሰበሰባለን። በዚህ ጊዜ ስለ ልጆችና ወጣቶች ፤ ስለ ሀገር ፤ ስለ ትሁት ልብ ፤ ስለ ጽኑ እምነት ፤ ስለ ፈውስ ፤ ስለ ሰላም ፤ ስለ ፍቅር ፤ ስለ ደስታ ፤ እና ስለ መንፈስ ፍሬዎች . . ወዘተ እንፀልያለን።
            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/ethprayer.jpg`,
        },
        {
            title: "ወጣት አዋቂዎች",
            description: `ጎልማሶችን በፍቅር እና በጥበብ በመምራት በኢየሱስ ክርስቶስ በእምነት ወደተሞላ ሕይወትና ልባቸውን በኢየሱስ ክርስቶስ መንገድ ላይ እንዲያደርጉ በመንከባከብ መንገዱን እንዲያውቁ እናግዛቸዋለን።            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/ethbaptism.jpg`

        },
        {
            title: "ልጆች",
            description: `ልጆችን በፍቅር እና በጥንቃቄ በመምራት የኢየሱስ ክርስቶስን ትምህርት እናስተዋውቃቸዋለን። ከእድሜ ጋር በሚስማማ ትምህርት እና ጸሎት እምነታቸውን ለማሳደግ እንጥራለን።
            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/ethfamily.png`
        },
        {
            title: "ጥምቀት",
            description: `አንድ አማኝ በኢየሱስ ክርስቶስ ላይ ያለውን እምነት በውሃ ውስጥ በመጥለቅ፣ በኃጢአት ንስሐ እና እርሱን ለመከተል ቃል መግባታቸውን የሚያሳዩበት ትርጉም ያለው መንፈሳዊ ሥርዓት በመሆኑ ከመሠረታዊ የክርስትና ትምህርት በመቀጠል እናጠምቃለን።
            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/ethfamily.png`
        },
        {
            title: "የጥናት ቡድኖች",
            description: `ትርጉም ላለው ህብረት፣ መንፈሳዊ እድገት እና በእምነት ጉዞዎ ውስጥ ድጋፍ ለማግኘት የቅርብ የተሳሰረ የጥናት ቡድኖቻችንን ይቀላቀሉ።
            `,
            imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/ethfamily.png`
        }
    ];

    return (
        <section>
            <AmharicMinistryHero />
            <div className='container mx-auto px-6 py-10'>
                <div className='mt-[3rem]' id="weekly-page">
                    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        እንኳን ደህና መጡ!
                    </h2>
                    <div className='flex flex-wrap justify-start mt-[2rem] gap-4'>
                        {scheduleItems.map((item, index) => (
                            <ScheduleCard key={index} {...item} ministry="amharic" />
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
                <CTA ministry="amharic" />
            </div>
        </section>
    );
}

export default AmharicMinistryPage
