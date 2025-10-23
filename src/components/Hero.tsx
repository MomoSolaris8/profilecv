'use client';

import Terminal from './Terminal';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-8">
        <Terminal />
      </div>

      <div className="text-center space-y-6 mt-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#6f9d92] to-[#d0371d] bg-clip-text text-transparent">
           Yu Heydemann
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300">
          Full-Stack Developer • Open Source Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-[#6f9d92] to-[#c3c297] hover:from-[#5f8d82] hover:to-[#b3b287] text-white font-semibold rounded-full transition-all transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
