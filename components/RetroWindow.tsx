import React, { useState, useEffect } from 'react';

type RetroWindowProps = {
  title: string;
  content: React.ReactNode;
  onClose?: () => void;
  zIndex: number;
};

export default function RetroWindow({ title, content, onClose, zIndex }: RetroWindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial random position
    const randomX = Math.random() * 100 - 50; // -50 to 50
    const randomY = Math.random() * 100 - 50; // -50 to 50
    setPosition({ x: randomX, y: randomY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed bg-[#c0c0c0] border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] shadow-[2px_2px_#000000]"
      style={{ 
        zIndex,
        width: '500px',
        top: `calc(50% + ${position.y}px)`,
        left: `calc(50% + ${position.x}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div 
        className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="font-bold">{title}</div>
        {onClose && (
          <button 
            onClick={onClose} 
            className="bg-[#c0c0c0] text-black border-t border-l border-[#ffffff] border-b border-r border-[#808080] px-2 leading-none"
          >
            X
          </button>
        )}
      </div>
      <div className="p-2 overflow-auto max-h-[80vh]">{content}</div>
    </div>
  );
}
