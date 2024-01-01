import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ABISMA - Chain Dev',
  description: 'Portfolio built with Next.js, tailwindcss, sanity, shadcnui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className=' dark:bg-primary'>
            <Navbar />
        {children}
        </main>
        </ThemeProvider>
        
        </body>
    </html>
  )
}
