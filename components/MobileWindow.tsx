import React from 'react';

interface MobileWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileWindow: React.FC<MobileWindowProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-auto">
      <div className="bg-[#000080] text-white px-4 py-2 flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <button onClick={onClose} className="text-2xl">&times;</button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default MobileWindow;
