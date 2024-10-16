import './globals.css'
import type { Metadata } from 'next'
import RetroNavBar from '../components/RetroNavBar'
import RetroFooter from '../components/RetroFooter'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'All Violet - Official Band Website',
  description: 'Welcome to the official website of All Violet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <RetroFooter />
        <SpeedInsights />
      </body>
    </html>
  )
}
