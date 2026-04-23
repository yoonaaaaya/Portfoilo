/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-lime rounded-sm flex items-center justify-center text-black font-black text-xl">Y</div>
        <span className="font-bold tracking-tighter text-xl">YOON PARK</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#projects" className="hover:text-brand-lime transition-colors">Projects</a>
        <a href="#experience" className="hover:text-brand-lime transition-colors">Experience</a>
        <a href="#about" className="hover:text-brand-lime transition-colors">About</a>
      </div>

      <a 
        href="mailto:pya6667@gmail.com"
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-lime transition-all"
      >
        <Mail size={16} />
        <span className="hidden sm:inline">Contact me</span>
      </a>
    </motion.nav>
  );
}
