'use client'

import Link from 'next/link'

export default function RetroNavBar() {
  return (
    <nav className="bg-[#C0C0C0] p-4 border-b-2 border-[#808080]">
      <ul className="flex justify-center space-x-4">
        <li><Link href="/" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Home</Link></li>
        <li><Link href="/music" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Music</Link></li>
        <li><Link href="/tour" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Tour</Link></li>
        <li><Link href="/guestbook" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Guestbook</Link></li>
        <li><Link href="/contact" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Contact</Link></li>
      </ul>
    </nav>
  )
}
