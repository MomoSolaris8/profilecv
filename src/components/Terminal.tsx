'use client';

import { useEffect, useState } from 'react';

export default function Terminal() {
  const [text, setText] = useState('');
  const fullText = 'whoami';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 bg-[#1a1e1e]/80 backdrop-blur-sm rounded-lg overflow-hidden border border-[#2a2e2e]">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#15191a] border-b border-[#2a2e2e]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-auto text-xs text-gray-400">bash — 80x1</span>
      </div>
      <div className="px-4 py-3 font-mono text-sm">
        <span className="text-[#6f9d92]">➜</span>{' '}
        <span className="text-[#c3c297]">~</span>{' '}
        <span className="text-gray-400">$</span>{' '}
        <span className="text-[#c3c297]">{text}</span>
        <span className="animate-pulse">▋</span>
      </div>
    </div>
  );
}
