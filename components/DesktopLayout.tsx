"use client";

import { ReactNode, useState, useEffect } from 'react';
import IconLink from './IconLink';
import MobileLayout from './MobileLayout';

export default function DesktopLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>;
  }

  return (
    <div className="bg-windows-desktop bg-cover bg-center min-h-screen p-8 relative">
      {/* Desktop content */}
      {children}
    </div>
  );
}
