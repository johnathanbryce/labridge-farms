import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
// Internal Components
import TopContactInfoBar from '@/components/TopContactInfoBar/TopContactInfoBar'
import Footer from '@/components/Footer/Footer'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Labridge Farms - Premium Labrador Breeders & Quality Farm Meats',
  description: 'Discover Labridge Farms, renowned for ethically bred Labrador Retrievers and the finest selection of farm-fresh beef and pork. Experience the best in canine companionship and premium meats.',
  keywords: 'Labrador Retriever Breeding, Premium Farm Meats, Beef Sales, Pork Sales, Ethical Breeding, Farm-Fresh Meats, Quality Labradors, Sustainable Farming, Organic Meats, Farm to Table',
  robots: 'index, follow',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <TopContactInfoBar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
