import Image from 'next/image'

import RetroFooter from '../../components/RetroFooter'

export default function About() {
  return (
    <>

      <main className="bg-[#000000] text-[#00FF00] font-['MS_Sans_Serif'] p-8 relative">
        <div className="absolute inset-0 bg-[url('/subway-map.png')] opacity-20 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-center mb-8 animate-pulse text-[#00FFFF] shadow-[0_0_10px_#00FFFF]">About All Violet</h1>
          
          <div className="bg-[#0000FF] border-4 border-[#FF00FF] p-6 mb-8 shadow-[0_0_15px_#FF00FF]">
            <p className="mb-4 text-lg">
              <span className="text-[#FFFF00] font-bold">All Violet</span> is the hottest new band to hit the NYC scene! 
              Formed in the gritty streets of Brooklyn, these five musical mavericks are ready to take the world by storm with their unique blend of electro-rock and synth-pop.
            </p>
            <p className="mb-4 text-lg">
              Their sound is like <span className="text-[#FF00FF]">The Strokes</span> meets <span className="text-[#FF00FF]">Daft Punk</span>, 
              with a dash of <span className="text-[#FF00FF]">Yeah Yeah Yeahs</span> thrown in for good measure. 
              It's the soundtrack for the new millennium!
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image 
              src="/band_photo.jpg" 
              width={400} 
              height={300} 
              alt="All Violet Band Photo" 
              className="border-4 border-[#FF00FF] shadow-[0_0_15px_#FF00FF]"
            />
          </div>

          <div className="bg-[#C0C0C0] text-[#000000] p-6 mb-8 border-t-4 border-l-4 border-[#FFFFFF] border-b-4 border-r-4 border-[#808080]">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#000080]">Meet the Band</h2>
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Violet Ray</span> - Lead Vocals & Synth</li>
              <li><span className="font-bold">Max Voltage</span> - Guitar & Backing Vocals</li>
              <li><span className="font-bold">Luna Bass</span> - Bass Guitar</li>
              <li><span className="font-bold">Neon Beats</span> - Drums & Percussion</li>
              <li><span className="font-bold">Pixel Wizard</span> - Keyboards & Programming</li>
            </ul>
          </div>

          <div className="text-center bg-[#FFD700] text-[#000000] p-4 border-2 border-[#000000] animate-pulse">
            <h2 className="text-2xl font-bold mb-4">UNDER CONSTRUCTION</h2>
            <p className="text-lg">
              Our tour page is coming soon! Check back for electrifying show dates!
            </p>
          </div>

          <div className="text-center mt-8 bg-[#000080] border-4 border-[#00FFFF] p-6 shadow-[0_0_15px_#00FFFF]">
            <h2 className="text-2xl font-bold mb-4 animate-pulse text-[#FFFFFF]">Watch Our Latest Music Video!</h2>
            <p className="text-lg mb-4 text-[#00FF00]">
              Check out "Failing on Easy" - our newest hit!
            </p>
            <a 
              href="https://www.youtube.com/watch?v=tDXjvRON4bA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#FF00FF] text-[#FFFFFF] font-bold py-2 px-4 rounded animate-bounce shadow-[0_0_10px_#FF00FF]"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </main>
      <RetroFooter />
    </>
  )
}
