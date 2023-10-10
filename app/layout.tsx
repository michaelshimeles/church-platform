import Footer from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  keywords: ['Tsega Bible', 'Tsega Bible Church', 'Tsega Bible Fellowship Church', 'Tsega Bible Church Toronto', 'Tsega Toronto', 'Ethiopian Toronto Church', 'Grace Bible Fellowship Church', 'Grace Bible Church'],
  openGraph: {
    title: 'Grace Bible Fellowship Church',
    description: 'Grow In Grace. Grow In Knowledge.',
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