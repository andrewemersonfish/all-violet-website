import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div className="text-center p-4 bg-white max-w-full overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FF00FF] font-bold font-['Courier_New'] break-words">
        All Violet The Band
      </h1>
      <div className="marquee overflow-hidden whitespace-nowrap my-4">
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-[#FFFF00] animate-marquee">
          <strong className="text-[#00FFFF]">NEON SEEPING FROM THE PAVEMENT</strong>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Image 
          src="/changing_pasture.jpg" 
          width={500} 
          height={20} 
          alt="Divider" 
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
  )
}
