"use client";

import { useState, useRef, useEffect } from 'react';
import RetroWindow from './RetroWindow';

export default function PaintProgram({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [painting, setPainting] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
  }, [brushColor, brushSize]);

  const startPosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setPainting(true);
    draw(e);
  };

  const endPosition = () => {
    setPainting(false);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!painting) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <RetroWindow
      title="Untitled - Paint"
      onClose={onClose}
      content={
        <div>
          <div className="flex justify-around mb-6">
            <button onClick={clearCanvas} className="bg-[#c0c0c0] border-2 border-black px-4 py-2 text-lg">Clear</button>
            <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)} className="w-12 h-12" />
            <button onClick={() => setBrushSize(5)} className="bg-[#c0c0c0] border-2 border-black px-4 py-2 text-lg">Small Brush</button>
            <button onClick={() => setBrushSize(10)} className="bg-[#c0c0c0] border-2 border-black px-4 py-2 text-lg">Large Brush</button>
          </div>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            onMouseDown={startPosition}
            onMouseUp={endPosition}
            onMouseMove={draw}
            className="border-4 border-black bg-white mx-auto"
          />
        </div>
      }
    />
  );
}
