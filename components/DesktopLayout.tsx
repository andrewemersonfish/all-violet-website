"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import IconLink from './IconLink';

export default function DesktopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-windows-desktop bg-cover bg-center min-h-screen p-8 relative">
      {/* Left-side icons */}
      <div className="fixed left-8 top-8 flex flex-col space-y-12">
        <IconLink href="/music" icon="/icons/my_computer.png" text="Music" />
        <IconLink href="/tour" icon="/icons/network_neighborhood.png" text="Tour" />
        <IconLink href="/guestbook" icon="/icons/inbox.png" text="Guestbook" />
        <IconLink href="/contact" icon="/icons/recycle_bin.png" text="Contact" />
        <IconLink href="/songs" icon="/icons/cd_audio.png" text="Songs" />
      </div>

      {/* Logo on the right */}
      <div className="fixed right-8 top-8">
        <Image 
          src="/all-violet-logo.png" 
          width={300} 
          height={300} 
          alt="All Violet Logo" 
          className="drop-shadow-lg"
          onError={(e) => {
            e.currentTarget.src = '/fallback-logo.png'; // Make sure to add a fallback logo
          }}
        />
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
