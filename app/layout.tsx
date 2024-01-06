import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import path from 'path'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const BG = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage-grotesque'
})

const skiff = localFont({
  src: [
    {
      path: './skiff/Skiff-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './skiff/Skiff-Light.woff2',
      weight: '370',
      style: 'light'
    },
    {
      path: './skiff/Skiff-Bold.woff2',
      weight: '500',
      style: 'bold'
    }
  ],
  display: 'swap',
  variable: '--font-skiff'
})


export const metadata: Metadata = {
  title: 'Practice mental models',
  description: 'A web-app made to help you practice decision making, examine your bias and be a clearer thinker overall.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${skiff.className} ${BG.variable}`}>{children}</body>
    </html>
  )
}
