import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}