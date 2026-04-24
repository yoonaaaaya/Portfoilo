/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function FooterContact() {
  return (
    <section id="contact" className="py-32 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl"
          >
            <h3 className="text-brand-purple font-black text-sm uppercase tracking-widest">Let's Connect</h3>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              아이디어를 구조화하여 실현 가능한 논리적 솔루션을 만드는 서비스 기획자입니다.
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              새로운 협업 기회나 프로젝트 제안은 언제나 환영입니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl group"
          >
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block p-8 md:p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-brand-purple/40 hover:bg-white/10 transition-all duration-500 relative group/box"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple group-hover/box:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email Me</p>
                    <p className="text-xl md:text-2xl font-black text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/box:bg-brand-purple group-hover/box:border-brand-purple transition-all">
                  <ArrowRight size={20} className="group-hover/box:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </motion.div>

          <div className="pt-12 flex items-center gap-8 border-t border-white/10 w-full justify-center">
            <div className="flex gap-6">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
