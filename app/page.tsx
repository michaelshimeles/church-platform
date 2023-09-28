import Hero from '@/components/Hero'
import { NavBar } from '@/components/NavBar'

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <Hero />
      <div className='flex pt-[6rem] text-center'>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-[20rem]">
          Choose Your Perferred Language
        </h1>
      </div>
    </main>
  )
}
