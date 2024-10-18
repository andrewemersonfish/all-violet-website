"use client";

import { ReactNode } from 'react';
import IconLink from './IconLink';

export default function DesktopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-windows-desktop bg-cover bg-center min-h-screen p-8 relative">
      {/* Page content */}
      {children}
    </div>
  );
}
