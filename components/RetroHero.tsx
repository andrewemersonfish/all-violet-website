import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div className="bg-black text-fuchsia-500 font-['Comic_Sans_MS',cursive] p-4">
      <table className="border-collapse w-full max-w-4xl mx-auto">
        <tbody>
          <tr>
            <td colSpan={3} className="border-2 border-fuchsia-500 p-4 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-2 border-fuchsia-500 p-4 align-top w-1/4">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-cyan-400 hover:underline">Home</Link>
                <Link href="/about" className="text-cyan-400 hover:underline">About</Link>
                <Link href="/music" className="text-cyan-400 hover:underline">Music</Link>
                <Link href="/tour" className="text-cyan-400 hover:underline">Tour</Link>
                <Link href="/guestbook" className="text-cyan-400 hover:underline">Guestbook</Link>
              </nav>
            </td>
            <td className="border-2 border-fuchsia-500 p-4 text-center align-top w-1/2">
              <h1 className="text-4xl text-yellow-300 animate-pulse mb-4">Welcome to All Violet&apos;s Website!</h1>
              <p className="mb-4">We&apos;re bringing the sound of the future to you TODAY!</p>
              <Image src="/Houndstooth.jpg" width={350} height={200} alt="Band Photo" className="border-2 border-dashed border-green-500 mx-auto" />
              <div className="bg-red-600 text-white font-bold p-2 mt-4 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  New album &quot;Digital Dreams&quot; dropping on 07.07.2003! Pre-order now!
                </div>
              </div>
            </td>
            <td className="border-2 border-fuchsia-500 p-4 align-top w-1/4">
              <h3 className="text-green-500 text-xl mb-2">Upcoming Shows</h3>
              <ul className="list-disc list-inside mb-4">
                <li>06/15 - Cyber Cafe, New York</li>
                <li>06/22 - The Matrix, Los Angeles</li>
                <li>06/29 - Millennium Club, Chicago</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="border-2 border-fuchsia-500 p-4 text-center text-xs">
              © 2003 All Violet. All rights reserved.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}