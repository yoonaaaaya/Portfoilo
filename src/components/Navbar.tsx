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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass shadow-sm"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-purple rounded-sm flex items-center justify-center text-white font-black text-xl">Y</div>
        <span className="font-extrabold tracking-tighter text-xl text-brand-dark">YOON PARK</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-black tracking-widest uppercase">
        <a href="#highlights" className="text-brand-gray hover:text-brand-purple transition-colors">수상 및 학력</a>
        <a href="#experience" className="text-brand-gray hover:text-brand-purple transition-colors">경력사항</a>
        <a href="#projects" className="text-brand-gray hover:text-brand-purple transition-colors">포트폴리오</a>
        <a href="#contact" className="text-brand-gray hover:text-brand-purple transition-colors">연락처</a>
      </div>

      <a 
        href="mailto:pya6667@gmail.com"
        className="flex items-center gap-2 bg-brand-purple text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-purple/20"
      >
        <Mail size={14} />
        <span className="hidden sm:inline">Get in touch</span>
      </a>
    </motion.nav>
  );
}
