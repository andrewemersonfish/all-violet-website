"use client";

import { useState, useEffect } from 'react';
import WindowWrapper from '../../components/WindowWrapper';
import MobileWindow from '../../components/MobileWindow';


export default function Music() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <div className="h-full bg-[#c0c0c0] text-black overflow-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#000080]">Our Music</h1>
      
      <div className="bg-[#ffffff] border-2 border-[#808080] p-4 mb-4">
        <h2 className="text-2xl font-bold mb-2 text-[#000080]">Tracklist</h2>
        <ul className="list-disc pl-6 text-lg">
          <li><a href="https://open.spotify.com/track/4KWtwwCQPZyHIUGMvOdfGp?si=216d357b8e5f4d50" className="text-[#0000FF] underline">Milk</a></li>
          <li><a href="https://open.spotify.com/track/4Ind7HpljeMsNpTFUKoDBX?si=b367bacfb90e4e14" className="text-[#0000FF] underline">Failing on Easy</a></li>
          <li><a href="https://open.spotify.com/track/3QrVeYxL0xCNRIZ2fLQ6Bz?si=c7460e4e558b4b62" className="text-[#0000FF] underline">Drugdealer</a></li>
          <li>My Way Back Home (Coming Soon!)</li>
        </ul>
      </div>

      <div className="bg-[#000080] border-2 border-[#ffffff] p-4 mb-4">
        <h2 className="text-2xl font-bold mb-2 text-[#ffffff]">Listen Now</h2>
        <div className="flex justify-around">
          <a href="https://open.spotify.com/artist/YOUR_SPOTIFY_ARTIST_ID" target="_blank" rel="noopener noreferrer" className="bg-[#c0c0c0] text-black px-4 py-2 rounded">Spotify</a>
          <a href="#" className="bg-[#c0c0c0] text-black px-4 py-2 rounded">Apple Music</a>
          <a href="https://www.youtube.com/watch?v=tDXjvRON4bA" target="_blank" rel="noopener noreferrer" className="bg-[#c0c0c0] text-black px-4 py-2 rounded">YouTube</a>
        </div>
      </div>

      <div className="bg-[#000000] border-2 border-[#00ff00] p-4">
        <h2 className="text-2xl font-bold mb-2 text-[#00ff00]">Retro Media Player</h2>
        <div className="bg-[#c0c0c0] p-2 border-2 border-[#808080]">
          <div className="bg-[#000000] h-8 mb-2"></div>
          <div className="flex justify-between">
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-2 py-1">Play</button>
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-2 py-1">Stop</button>
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-2 py-1">Next</button>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    <MobileWindow title="Music" onClose={() => {}}>
      {content}
    </MobileWindow>
  ) : (
    <WindowWrapper title="Music" onClose={() => {}} zIndex={1}>
      {content}
    </WindowWrapper>
  );
}
