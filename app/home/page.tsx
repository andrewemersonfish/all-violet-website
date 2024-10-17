"use client";

import { useState } from 'react';
import Image from 'next/image';
import Music from '../music/page';
import Tour from '../tour/page';
import Guestbook from '../guestbook/page';
import Contact from '../contact/page';
import WindowWrapper from '../../components/WindowWrapper';

export default function Home() {
  const [activeWindows, setActiveWindows] = useState<string[]>(['home']);

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
      <div className="fixed left-8 top-8 flex flex-col space-y-12">
        <IconLink onClick={() => openWindow('music')} icon="/icons/my_computer.png" text="Music" />
        <IconLink onClick={() => openWindow('tour')} icon="/icons/network_neighborhood.png" text="Tour" />
        <IconLink onClick={() => openWindow('guestbook')} icon="/icons/inbox.png" text="Guestbook" />
        <IconLink onClick={() => openWindow('contact')} icon="/icons/recycle_bin.png" text="Contact" />
      </div>

      <div className="fixed right-8 top-8">
        <Image 
          src="/all-violet-logo.png" 
          width={300} 
          height={300} 
          alt="All Violet Logo" 
          className="drop-shadow-lg"
        />
      </div>

      {activeWindows.map((windowName, index) => (
        <WindowWrapper 
          key={windowName} 
          title={getWindowTitle(windowName)} 
          onClose={() => closeWindow(windowName)}
          zIndex={index + 1}
        >
          <div onClick={() => openWindow(windowName)}>
            {getWindowContent(windowName)}
          </div>
        </WindowWrapper>
      ))}
    </div>
  );
}

function IconLink({ onClick, icon, text }: { onClick: () => void; icon: string; text: string }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer group">
      <Image src={icon} alt={`${text} Icon`} width={60} height={60} className="group-hover:scale-110 transition-transform" />
      <span className="text-white text-xl mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{text}</span>
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
    default: return 'All Violet';
  }
}

function getWindowContent(windowName: string): React.ReactNode {
  switch (windowName) {
    case 'home':
      return (
        <div className="p-2 font-['MS_Sans_Serif']">
          <h1 className="text-2xl font-bold mb-4">Welcome to All Violet</h1>
          <div className="bg-[#fffbf0] border border-[#000000] p-4 mb-4">
            <div className="flex items-start mb-2">
              <img src="/lightbulb-icon.png" alt="Tip" className="mr-2 w-6 h-6" />
              <p className="text-sm">
                To explore our site, click on the desktop icons for Music, Tour, Guestbook, and Contact.
              </p>
            </div>
            <img src="/computer-icon.png" alt="Computer" className="mx-auto w-32 h-32" />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-4 py-1">
              What's New
            </button>
            <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] px-4 py-1">
              Close
            </button>
          </div>
        </div>
      );
    case 'music': return <Music />;
    case 'tour': return <Tour />;
    case 'guestbook': return <Guestbook />;
    case 'contact': return <Contact />;
    default: return null;
  }
}
