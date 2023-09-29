import Hero from '@/components/Hero'
import ServiceSchedule from '@/components/ServiceSchedule'
import ChurchCard from '@/components/card/ChurchCard'

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <Hero />
      <div className='flex flex-col mt-[4rem] text-center mb-12 p-3 sm:md:w-[100%] md:w-[70%]'>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          One Family. Different Languages.
        </h1>
        <p className='mt-[1rem]'>Our Church serves both English and Amharic speaking people, fostering unity in diversity through the language of faith in our Lord and Saviour Jesus Christ.</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-9 px-3 mb-7'>
        <ChurchCard image={'/family.jpeg'} language={'English'} church={'Grace Bible Fellowship Church'} description={`Our vision is to create a dynamic fellowship of believers who seek to connect with God, grow in their relationship with Jesus Christ, and serve others with love and compassion.`} />
        <ChurchCard image={'/holyspirit.png'} language={'Amharic'} church={'ጸጋ Bible Fellowship Church'} description={`ራዕያችን ከእግዚአብሔር ጋር ለመገናኘት፣ ከኢየሱስ ክርስቶስ ጋር ባላቸው ግንኙነት የሚያድግ እና ሌሎችን በፍቅር እና በርህራሄ የሚያገለግሉ አማኞች ተለዋዋጭ ህብረት መፍጠር ነው።`} />
      </div>
      <ServiceSchedule />
    </main>
  )
}
