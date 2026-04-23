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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

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
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[80px] overflow-hidden border-2 border-brand-purple/20 p-2 bg-white shadow-xl">
                <img 
                  src="/증명사진_흰색.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-[70px] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20} />} href={PERSONAL_INFO.socials.github} />
              <SocialIcon icon={<Linkedin size={20} />} href={PERSONAL_INFO.socials.linkedin} />
              <SocialIcon icon={<Instagram size={20} />} href={PERSONAL_INFO.socials.instagram} />
            </div>

            <div className="text-brand-gray text-xs uppercase tracking-[0.2em] font-medium leading-loose border-l-2 border-brand-purple pl-4">
              (2021 — PRESENT)<br />
              SEOUL BASED<br />
              PLANNING & ANALYSIS
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-brand-purple font-bold tracking-tight text-xl flex items-center justify-center md:justify-start gap-2">
                <span className="block w-2 h-2 bg-brand-purple rounded-full"></span>
                안녕하세요! 박윤아입니다
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-brand-dark">
                아이디어를 <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full border border-brand-purple/20 italic font-serif">논리적인 솔루션</span>으로 <span className="text-brand-purple underline decoration-brand-purple/30 underline-offset-8">구조화</span>하는 <span className="text-brand-gray">기획자</span>입니다.
              </h1>
            </div>

            <p className="text-brand-gray text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
              {PERSONAL_INFO.intro}
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-brand-purple text-white px-10 py-5 rounded-full font-bold text-lg group overflow-hidden relative shadow-xl shadow-brand-purple/30"
              >
                <span className="relative z-10 uppercase tracking-tight">수수행 프로젝트 살펴보기</span>
                <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.a>
              <div className="flex flex-col gap-1 items-center md:items-start text-brand-gray text-sm">
                 <div className="flex items-center gap-2 font-bold text-brand-dark">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   협업 및 기획 포지션 제안 환영
                 </div>
                 <span className="opacity-60">{PERSONAL_INFO.email}</span>
              </div>
            </div>
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
      className="p-3 bg-white border border-black/5 shadow-sm rounded-full hover:bg-brand-purple hover:text-white transition-all text-brand-gray"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
