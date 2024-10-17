"use client";

import Image from 'next/image'

import RetroFooter from '../../components/RetroFooter'
import { useState } from 'react'

export default function Guestbook() {
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowError(true)
  }

  return (
    <>
      <main className="bg-[#000000] text-[#00FF00] font-['MS_Sans_Serif'] p-8 relative">
        <div className="absolute inset-0 bg-[url('/clouds.png')] opacity-20 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold text-center mb-8 animate-pulse text-[#00FFFF] shadow-[0_0_10px_#00FFFF]">Guestbook</h1>
          
          <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">Sign Our Guestbook</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[#000000] mb-2 text-xl">Name:</label>
                <input type="text" className="w-full p-2 border-2 border-[#808080] text-xl" />
              </div>
              <div>
                <label className="block text-[#000000] mb-2 text-xl">Message:</label>
                <textarea className="w-full p-2 border-2 border-[#808080] h-32 text-xl"></textarea>
              </div>
              <button type="submit" className="bg-[#C0C0C0] text-[#000000] px-5 py-3 border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] text-xl">
                Submit
              </button>
            </form>
          </div>

          <div className="bg-[#000080] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] p-6 shadow-[0_0_15px_#00FFFF]">
            <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">Recent Messages</h2>
            <div className="space-y-4">
              <div className="bg-[#C0C0C0] p-4 border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080]">
                <p className="text-[#000000] font-bold text-xl">CoolFan99:</p>
                <p className="text-[#000000] text-xl">Love your music! Can't wait for the new release!</p>
              </div>
              <div className="bg-[#C0C0C0] p-4 border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080]">
                <p className="text-[#000000] font-bold text-xl">RetroRocker:</p>
                <p className="text-[#000000] text-xl">Your website is awesome! Takes me back to the good old days!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RetroFooter />

      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] w-[400px]">
            <div className="bg-[#000080] text-[#FFFFFF] p-1 flex items-center justify-between">
              <span className="font-bold text-xl">Error</span>
              <button onClick={() => setShowError(false)} className="text-[#FFFFFF] px-2 text-xl">X</button>
            </div>
            <div className="p-4 flex">
              <Image src="/error-icon.png" width={48} height={48} alt="Error" className="mr-4" />
              <div>
                <p className="text-[#000000] mb-4 text-lg">The guestbook is currently unavailable. The server might be experiencing technical difficulties, or you may need to adjust your browser settings.</p>
                <p className="text-[#000000] text-lg">Please try the following:</p>
                <ul className="list-disc list-inside text-[#000000] text-lg">
                  <li>Click the Refresh button, or try again later.</li>
                  <li>Check your internet connection settings.</li>
                  <li>Contact the website administrator if the problem persists.</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#C0C0C0] p-2 flex justify-end">
              <button onClick={() => setShowError(false)} className="bg-[#C0C0C0] text-[#000000] px-5 py-2 border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] text-xl">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
