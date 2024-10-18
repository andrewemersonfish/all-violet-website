import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DesktopLayout from '../components/DesktopLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All Violet',
  description: 'Official website of All Violet',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
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
