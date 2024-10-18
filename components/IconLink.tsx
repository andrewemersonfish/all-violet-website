'use client'

import Link from 'next/link';
import Image from 'next/image';

interface IconLinkProps {
  href: string;
  icon: string;
  text: string;
}

export default function IconLink({ href, icon, text }: IconLinkProps) {
  return (
    <Link href={href} className="flex flex-col items-center cursor-pointer group">
      <Image src={icon} alt={`${text} Icon`} width={60} height={60} className="group-hover:scale-110 transition-transform" />
      <span className="text-white text-xl mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">{text}</span>
    </Link>
  );
}
