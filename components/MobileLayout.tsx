'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const icons = [
    { name: 'Home', icon: '/icons/home.png' },
    { name: 'Music', icon: '/icons/music_icon.png' },
    { name: 'Tour', icon: '/icons/ticket.png' },
    { name: 'Guestbook', icon: '/icons/contacts.png' },
    { name: 'Contact', icon: '/icons/information.png' },
    { name: 'Songs', icon: '/icons/spotify.png' },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('/mobile_background.jpg')" }}>
      {activeWindow ? (
        <div className="fixed inset-0 bg-white z-50">
          <div className="bg-gray-200 p-2 flex justify-between items-center">
            <h2 className="font-bold">{activeWindow}</h2>
            <button onClick={closeWindow} className="text-2xl">&times;</button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {icons.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center" onClick={() => openWindow(icon.name)}>
              <Image src={icon.icon} alt={icon.name} width={50} height={50} />
              <span className="text-white mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{icon.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
