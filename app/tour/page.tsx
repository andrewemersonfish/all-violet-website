import RetroFooter from '../../components/RetroFooter'

export default function Tour() {
  return (
    <>
      <main className="bg-[#000000] text-[#00FF00] font-['MS_Sans_Serif'] p-8 relative">
        <div className="absolute inset-0 bg-[url('/subway-map.png')] opacity-40 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-center mb-8 animate-pulse text-[#00FFFF] shadow-[0_0_10px_#00FFFF]">Tour Dates</h1>
          
          <div className="bg-[#C0C0C0] border-4 border-[#808080] p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#000080]">Upcoming Shows</h2>
            <table className="w-full text-[#000000]">
              <thead>
                <tr>
                  <th className="border-2 border-[#000000] p-2">Date</th>
                  <th className="border-2 border-[#000000] p-2">Venue</th>
                  <th className="border-2 border-[#000000] p-2">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-[#000000] p-2">Nov 15, 2024</td>
                  <td className="border-2 border-[#000000] p-2">The Bowery Ballroom</td>
                  <td className="border-2 border-[#000000] p-2">New York, NY</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#000000] p-2">Nov 20, 2024</td>
                  <td className="border-2 border-[#000000] p-2">Paradise Rock Club</td>
                  <td className="border-2 border-[#000000] p-2">Boston, MA</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#000000] p-2">Nov 25, 2024</td>
                  <td className="border-2 border-[#000000] p-2">9:30 Club</td>
                  <td className="border-2 border-[#000000] p-2">Washington, DC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#000080] border-4 border-[#00FFFF] p-6 shadow-[0_0_15px_#00FFFF]">
            <h2 className="text-2xl font-bold mb-4 text-[#FFFFFF]">Get Tickets</h2>
            <button className="bg-[#FFD700] text-[#000000] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#808080] px-4 py-2 font-bold animate-pulse">
              BUY NOW
            </button>
          </div>
        </div>
      </main>
      <RetroFooter />
    </>
  )
}
