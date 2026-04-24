/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FooterContact from "./components/FooterContact";
import Highlights from "./components/Highlights";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Strengths />
      <Highlights />
      <Experience />
      <Projects />
      <Skills />
      <FooterContact />
      
      {/* Scroll indicator for mouse users */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-lime animate-bounce" />
        </div>
      </div>
    </main>
  );
}
