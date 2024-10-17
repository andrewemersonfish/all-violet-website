import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div className="text-center p-4 bg-[#008080] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#000000] max-w-[800px] mx-auto my-8 shadow-md relative">
      <div className="absolute inset-0 bg-[url('/clouds.png')] opacity-30 z-0"></div>
      <div className="bg-[#000080] text-[#FFFFFF] p-1 flex items-center justify-between mb-2 relative z-10">
        <span className="font-bold font-['MS_Sans_Serif'] text-base">All Violet - Official Band Page</span>
        <div className="flex space-x-1">
          <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#808080] text-[10px] flex items-center justify-center">_</button>
          <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#808080] text-[10px] flex items-center justify-center">□</button>
          <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#808080] text-[10px] flex items-center justify-center">X</button>
        </div>
      </div>
      <div className="bg-[#000000] p-4 mb-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#00FFFF] font-bold font-['MS_Sans_Serif'] break-words animate-pulse">
          All Violet
        </h1>
      </div>
      <div className="flex justify-between mb-4 relative z-10">
        <Link href="/" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Home</Link>
        <Link href="/music" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Music</Link>
        <Link href="/tour" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Tour</Link>
        <Link href="/guestbook" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Guestbook</Link>
        <Link href="/contact" className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-3 py-2 text-base font-['MS_Sans_Serif']">Contact</Link>
      </div>
      <div className="bg-[#FFFFFF] border-2 border-[#000000] p-4 mb-4 relative z-10">
        <h2 className="text-[#FF00FF] font-bold font-['MS_Sans_Serif'] text-2xl mb-2">Latest Releases</h2>
        <ul className="text-left text-lg">
          <li><a href="https://open.spotify.com/track/4KWtwwCQPZyHIUGMvOdfGp?si=216d357b8e5f4d50" className="text-[#0000FF] underline">Milk</a></li>
          <li><a href="https://open.spotify.com/track/4Ind7HpljeMsNpTFUKoDBX?si=b367bacfb90e4e14" className="text-[#0000FF] underline">Failing on Easy</a> - <a href="https://www.youtube.com/watch?v=tDXjvRON4bA" className="text-[#FF0000]">Watch Music Video</a></li>
          <li><a href="https://open.spotify.com/track/3QrVeYxL0xCNRIZ2fLQ6Bz?si=c7460e4e558b4b62" className="text-[#0000FF] underline">Drugdealer</a></li>
        </ul>
      </div>
      <div className="bg-[#FFFF00] border-2 border-[#FF0000] p-4 mb-4 animate-pulse relative z-10">
        <h2 className="text-[#FF0000] font-bold font-['MS_Sans_Serif'] text-2xl">Coming Soon!</h2>
        <p className="text-[#000000] font-['MS_Sans_Serif'] text-lg">"My Way Back Home" - Releasing November 12th</p>
        <p className="text-[#000000] font-['MS_Sans_Serif'] text-lg">Mixtape: "Neon Seeping From The Pavement" - Early Next Year</p>
      </div>
      <div className="mt-4 flex justify-center relative z-10">
        <Image src="/construction.gif" width={67} height={67} alt="Under Construction" className="mr-2" />
        <button className="bg-[#FFD700] text-[#000000] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-5 py-3 font-bold animate-pulse font-['MS_Sans_Serif'] text-base">
          SITE UNDER CONSTRUCTION
        </button>
        <Image src="/construction.gif" width={67} height={67} alt="Under Construction" className="ml-2" />
      </div>
    </div>
  )
}
