import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div className="text-center p-5 bg-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#FF00FF] font-bold font-['Courier_New']">
        All Violet The Band
      </h1>
      <div className="marquee overflow-hidden whitespace-nowrap">
        <p className="text-lg md:text-2xl lg:text-3xl text-[#FFFF00] animate-marquee">
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
