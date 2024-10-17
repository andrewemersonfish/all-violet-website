"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DesktopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-windows-desktop bg-cover bg-center min-h-screen p-8 relative">
      {/* Left-side icons */}
      <div className="fixed left-8 top-8 flex flex-col space-y-12">
        <IconLink href="/music" icon="/icons/my_computer.png" text="Music" />
        <IconLink href="/tour" icon="/icons/network_neighborhood.png" text="Tour" />
        <IconLink href="/guestbook" icon="/icons/inbox.png" text="Guestbook" />
        <IconLink href="/contact" icon="/icons/recycle_bin.png" text="Contact" />
      </div>

      {/* Logo on the right */}
      <div className="fixed right-8 top-8">
        <Image 
          src="/all-violet-logo.png" 
          width={300} 
          height={300} 
          alt="All Violet Logo" 
          className="drop-shadow-lg"
        />
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}

function IconLink({ href, icon, text }: { href: string; icon: string; text: string }) {
  return (
    <Link href={href} className="flex flex-col items-center cursor-pointer group">
      <Image src={icon} alt={`${text} Icon`} width={60} height={60} className="group-hover:scale-110 transition-transform" />
      <span className="text-white text-xl mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{text}</span>
    </Link>
  );
}
