'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789アカサタナハマヤラワイキシチニヒミリヰウクスツヌフムユルヲエケセテネヘメレヱオコソトノホモヨロヲ';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const speeds: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = Math.random() * 0.5 + 0.5;
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(10, 14, 14, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Create gradient effect - brighter at the top, dimmer at the bottom
        const alpha = Math.max(0, 1 - (y / canvas.height) * 0.8);
        
        // Alternate between green and yellow colors
        const isGreen = Math.random() > 0.5;
        const color = isGreen ? `rgba(111, 157, 146, ${alpha * 0.8})` : `rgba(195, 194, 151, ${alpha * 0.6})`;
        
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speeds[i];
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
