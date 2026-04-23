/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-[1fr_2fr] gap-12">
          {/* Profile Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[80px] overflow-hidden border-2 border-brand-lime/20 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-[70px] filter grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-lime text-black p-4 rounded-2xl shadow-xl flex flex-col items-center">
                 <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Status</span>
                 <span className="text-sm font-black whitespace-nowrap">Available for projects</span>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20} />} href={PERSONAL_INFO.socials.github} />
              <SocialIcon icon={<Linkedin size={20} />} href={PERSONAL_INFO.socials.linkedin} />
              <SocialIcon icon={<Instagram size={20} />} href={PERSONAL_INFO.socials.instagram} />
            </div>

            <div className="text-brand-gray text-xs uppercase tracking-[0.2em] font-medium leading-loose border-l-2 border-brand-lime pl-4">
              (2021 — PRESENT)<br />
              SEOUL BASED
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 text-center md:text-left"
          >
            <div className="space-y-2">
              <h2 className="text-brand-lime font-bold tracking-tight text-xl flex items-center justify-center md:justify-start gap-2">
                <span className="block w-2 h-2 bg-brand-lime rounded-full"></span>
                Hi! I'm {PERSONAL_INFO.name}
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                a <span className="inline-block px-4 py-2 bg-brand-muted text-white rounded-full border border-white/10 italic font-serif">Service Designer</span> from <span className="text-brand-gray">Seoul</span> turning ideas into <span className="text-glow">impactful realities.</span>
              </h1>
            </div>

            <p className="text-brand-gray text-lg md:text-xl max-w-xl leading-relaxed">
              {PERSONAL_INFO.intro}
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-center md:self-start flex items-center gap-3 bg-brand-lime text-black px-8 py-4 rounded-full font-bold text-lg group overflow-hidden relative"
            >
              <span className="relative z-10 font-bold uppercase tracking-tight">See what I can do</span>
              <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="p-3 bg-brand-muted border border-white/5 rounded-full hover:bg-brand-lime hover:text-black transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
