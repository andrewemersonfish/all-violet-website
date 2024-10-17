import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DesktopLayout from '../components/DesktopLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All Violet',
  description: 'Official website of All Violet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DesktopLayout>
          {children}
        </DesktopLayout>
      </body>
    </html>
  )
}
