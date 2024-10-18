"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Music from '../music/page';
import Tour from '../tour/page';
import Guestbook from '../guestbook/page';
import Contact from '../contact/page';
import WindowWrapper from '../../components/WindowWrapper';
import SongsContent from '../../components/SongsContent';

export default function Home() {
  const [activeWindows, setActiveWindows] = useState<string[]>(['home']);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating an API call or data fetching
    const fetchData = async () => {
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // If the API call was successful, we don't set an error
      } catch (err) {
        setError("Failed to load data. Please refresh the page.");
      }
    };

    fetchData();
  }, []);

  const openWindow = (windowName: string) => {
    if (!activeWindows.includes(windowName)) {
      setActiveWindows([...activeWindows, windowName]);
    } else {
      // Bring window to front if it's already open
      setActiveWindows([
        ...activeWindows.filter(w => w !== windowName),
        windowName
      ]);
    }
  };

  const closeWindow = (windowName: string) => {
    setActiveWindows(activeWindows.filter(w => w !== windowName));
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/windows_background.jpg')"}}>
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-[#FF0000] text-[#FFFFFF] p-2 text-center z-50">
          {error}
        </div>
      )}
      <div className="fixed left-8 top-8 flex flex-col space-y-2">
        <IconLink onClick={() => openWindow('music')} icon="/icons/music_icon.png" text="Music" />
        <IconLink onClick={() => openWindow('tour')} icon="/icons/ticket.png" text="Tour" />
        <IconLink onClick={() => openWindow('guestbook')} icon="/icons/contacts.png" text="Guestbook" />
        <IconLink onClick={() => openWindow('contact')} icon="/icons/information.png" text="Contact" />
        <IconLink onClick={() => openWindow('songs')} icon="/icons/spotify.png" text="Songs" />
      </div>

     

      {activeWindows.map((windowName, index) => (
        <WindowWrapper
          key={windowName}
          title={getWindowTitle(windowName)}
          onClose={() => closeWindow(windowName)}
          zIndex={index + 1}
        >
          {getWindowContent(windowName)}
        </WindowWrapper>
      ))}
    </div>
  );
}

function IconLink({ onClick, icon, text }: { onClick: () => void; icon: string; text: string }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer group w-24 mb-4">
      <div className="mb-1 w-16 h-16 flex items-center justify-center">
        <Image 
          src={icon} 
          alt={`${text} Icon`} 
          width={64} 
          height={64} 
          className="group-hover:scale-110 transition-transform"
        />
      </div>
      <span className="text-black text-sm text-center px-1 break-words shadow-md">{text}</span>
    </div>
  );
}

function getWindowTitle(windowName: string): string {
  switch (windowName) {
    case 'home': return 'Welcome to All Violet';
    case 'music': return 'Music';
    case 'tour': return 'Tour';
    case 'guestbook': return 'Guestbook';
    case 'contact': return 'Contact';
    case 'songs': return 'Songs';
    default: return 'All Violet';
  }
}

function getWindowContent(windowName: string): React.ReactNode {
  switch (windowName) {
    case 'home':
      return (
        <div className="p-4 font-['MS_Sans_Serif'] bg-[#c0c0c0] text-black">
          <h1 className="text-2xl font-bold mb-4 text-[#000080]">Welcome to All Violet</h1>
          <p className="text-sm mb-4">
            To explore our site, click on the desktop icons.
          </p>
          <div className="flex justify-center mb-4">
            <Image 
              src="/changing_pasture.jpg"
              width={400} 
              height={225} 
              alt="Changing Pasture"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-4 py-1 text-black">
              What's New
            </button>
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-4 py-1 text-black">
              Close
            </button>
          </div>
        </div>
      );
    case 'music': return <Music />;
    case 'tour': return <Tour />;
    case 'guestbook': return <Guestbook />;
    case 'contact': return <Contact />;
    case 'songs': return <SongsContent />;
    default: return null;
  }
}
