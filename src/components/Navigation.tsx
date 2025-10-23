'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e0e]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#c3c297]">Yu Heydemann</h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#c3c297] p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>

          <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-[#0a0e0e]/95 md:bg-transparent p-6 md:p-0 gap-6`}>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#c3c297] transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-[#c3c297] transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-[#c3c297] transition-colors">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#c3c297] transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
