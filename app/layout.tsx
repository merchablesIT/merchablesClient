import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Merchables',
  description: '🚀 Join me on Merchables, where sneaker enthusiasts, creative minds, and e-commerce aficionados unite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PlausibleProvider domain="merchables.io">
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </PlausibleProvider>
  )
}
