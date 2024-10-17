
import RetroFooter from '../../components/RetroFooter'

export default function Contact() {
  return (
    <>

      <main className="bg-[#000000] text-[#00FF00] font-['MS_Sans_Serif'] p-8 relative">
        <div className="absolute inset-0 bg-[url('/clouds.png')] opacity-20 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold text-center mb-8 animate-pulse text-[#00FFFF] shadow-[0_0_10px_#00FFFF]">Contact Us</h1>
          
          <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">Get in Touch</h2>
            <div className="space-y-4 text-xl">
              <p className="text-[#000000]">Email us at: <a href="mailto:contact@allviolet.com" className="text-[#0000FF] underline">contact@allviolet.com</a></p>
              <p className="text-[#000000]">For bookings: <a href="mailto:bookings@allviolet.com" className="text-[#0000FF] underline">bookings@allviolet.com</a></p>
            </div>
          </div>

          <div className="bg-[#000080] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] p-6 shadow-[0_0_15px_#00FFFF]">
            <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">Follow Us</h2>
            <div className="flex justify-around">
              <a href="https://www.instagram.com/allvioletwastaken/" target="_blank" rel="noopener noreferrer" className="bg-[#C0C0C0] text-[#000000] px-5 py-3 rounded text-xl">Instagram</a>
              <a href="https://www.tiktok.com/@allvioletwastaken" target="_blank" rel="noopener noreferrer" className="bg-[#C0C0C0] text-[#000000] px-5 py-3 rounded text-xl">TikTok</a>
            </div>
          </div>
        </div>
      </main>
      <RetroFooter />
    </>
  )
}
