import Footer from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  keywords: ['Tsega Bible', 'Tsega Bible Church', 'Tsega Bible Fellowship Church', 'Tsega Bible Church Toronto', 'Tsega Toronto', 'Ethiopian Toronto Church', 'Grace Bible Fellowship Church', 'Grace Bible Church'],
  openGraph: {
    title: 'Grace Bible Fellowship Church',
    description: 'At Grace / Tsega (ጸጋ) Bible Fellowship Church, we believe that the process of becoming a disciple of Jesus is a lifelong journey of growth and transformation. Our vision is to create a dynamic fellowship of believers who seek to connect with God, grow in their relationship with Jesus Christ, and serve others with love and compassion.',
    images: ['https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/sermon.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain="tsegabiblefellowship.com" trackOutboundLinks={true}/>
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}