import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Nutritionist',
  description: 'Nutrition Website Template for a Healthcare Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-greenShade97`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
