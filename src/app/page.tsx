'use client';

import { useEffect, useRef } from 'react';
import MatrixRain from '@/components/MatrixRain';
import ThreeScene from '@/components/ThreeScene';
import Terminal from '@/components/Terminal';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#0a0e0e]">
      <MatrixRain />
      <ThreeScene />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
