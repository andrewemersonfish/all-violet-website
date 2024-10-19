'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Home from '../app/home/page';
import Music from '../app/music/page';
import Tour from '../app/tour/page';
import Guestbook from '../app/guestbook/page';
import Contact from '../app/contact/page';
import Songs from '../app/songs/page';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = (windowName: string) => {
    setActiveWindow(windowName);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  const topIcons = [
    { name: 'Home', icon: '/icons/home.png' },
    { name: 'Tour', icon: '/icons/ticket.png' },
    { name: 'Guestbook', icon: '/icons/contacts.png' },
  ];

  const dockIcons = [
    { name: 'Music', icon: '/icons/music_icon.png' },
    { name: 'Contact', icon: '/icons/information.png' },
    { name: 'Songs', icon: '/icons/spotify.png' },
  ];

  const getWindowContent = (windowName: string) => {
    switch (windowName) {
      case 'Home':
        return <Home />;
      case 'Music':
        return <Music />;
      case 'Tour':
        return <Tour />;
      case 'Guestbook':
        return <Guestbook />;
      case 'Contact':
        return <Contact />;
      case 'Songs':
        return <Songs />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center p-4 pb-20" style={{ backgroundImage: "url('/mobile_background.jpg')" }}>
      {activeWindow ? (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="bg-gray-200 p-2 flex justify-between items-center">
            <h2 className="font-bold">{activeWindow}</h2>
            <button onClick={closeWindow} className="text-2xl">&times;</button>
          </div>
          <div className="flex-grow overflow-auto p-4">
            {getWindowContent(activeWindow)}
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {topIcons.map((icon) => (
              <div key={icon.name} className="flex flex-col items-center" onClick={() => openWindow(icon.name)}>
                <Image src={icon.icon} alt={icon.name} width={50} height={50} />
                <span className="text-white mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{icon.name}</span>
              </div>
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-around items-center">
            {dockIcons.map((icon) => (
              <div key={icon.name} className="flex flex-col items-center" onClick={() => openWindow(icon.name)}>
                <Image src={icon.icon} alt={icon.name} width={50} height={50} />
                <span className="text-white text-xs mt-1">{icon.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
