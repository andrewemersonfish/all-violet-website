import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IconProps {
  href: string;
  icon: string;
  text: string;
}

const Icon: React.FC<IconProps> = ({ href, icon, text }) => (
  <Link href={href} className="flex flex-col items-center">
    <Image src={icon} alt={text} width={60} height={60} className="rounded-xl" />
    <span className="text-white text-xs mt-1">{text}</span>
  </Link>
);

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-black min-h-screen p-4">
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Icon href="/music" icon="/icons/music_icon.png" text="Music" />
        <Icon href="/tour" icon="/icons/ticket.png" text="Tour" />
        <Icon href="/guestbook" icon="/icons/contacts.png" text="Guestbook" />
        <Icon href="/contact" icon="/icons/information.png" text="Contact" />
        <Icon href="/songs" icon="/icons/spotify.png" text="Songs" />
      </div>
      {children}
    </div>
  );
};

export default MobileLayout;
