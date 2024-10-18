'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface IconLinkProps {
  href: string;
  icon: string;
  text: string;
}

export default function IconLink({ href, icon, text }: IconLinkProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link 
      href={href} 
      className="flex flex-col items-center cursor-pointer group"
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <Image 
        src={icon} 
        alt={`${text} Icon`} 
        width={60} 
        height={60} 
        className={`transition-transform ${isActive ? 'scale-110' : ''}`} 
      />
      <span className="text-white text-xl mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{text}</span>
    </Link>
  );
}
