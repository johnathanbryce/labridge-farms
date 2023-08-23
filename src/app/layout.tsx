import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Internal Components
import TopContactInfoBar from '@/components/TopContactInfoBar/TopContactInfoBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Labridge Farms',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <TopContactInfoBar />
          {children}
      </body>
    </html>
  )
}
