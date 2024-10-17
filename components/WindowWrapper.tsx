'use client'

import RetroWindow from './RetroWindow';

interface WindowWrapperProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  zIndex: number;
}

export default function WindowWrapper({ title, children, onClose, zIndex }: WindowWrapperProps) {
  return (
    <RetroWindow
      title={title}
      onClose={onClose}
      content={children}
      zIndex={zIndex}
    />
  );
}
