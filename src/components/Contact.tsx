/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
           <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
            Contact Me
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-dark">언제든 <span className="text-brand-purple italic font-serif text-glow">연락</span> 주세요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard 
            title="LinkedIn" 
            handle="/yoona-park" 
            icon={<Linkedin className="text-brand-purple" />} 
            href={PERSONAL_INFO.socials.linkedin} 
          />
          <ContactCard 
            title="Instagram" 
            handle="@yoona_p" 
            icon={<Instagram className="text-brand-purple" />} 
            href={PERSONAL_INFO.socials.instagram} 
          />
          <ContactCard 
            title="GitHub" 
            handle="/yoona-park" 
            icon={<Github className="text-brand-purple" />} 
            href={PERSONAL_INFO.socials.github} 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-12 rounded-[50px] bg-brand-purple flex flex-col items-center justify-center text-white text-center shadow-2xl shadow-brand-purple/20"
        >
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            새로운 프로젝트나<br />
            협업 제안은 언제나 환영합니다.
          </h3>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-4 bg-brand-dark text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-black transition-all"
          >
            <Mail />
            <span>{PERSONAL_INFO.email}</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <footer className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-gray text-xs font-bold uppercase tracking-widest">
           <div>© 2026 {PERSONAL_INFO.koreanName} — All Rights Reserved</div>
           <div className="flex gap-8">
             <span className="opacity-50">Handcrafted with Logic in Seoul</span>
           </div>
           <div className="flex gap-4">
             <span className="text-brand-purple font-black">Yoona Park</span>
           </div>
        </footer>
      </div>
    </section>
  );
}

function ContactCard({ title, handle, icon, href }: { title: string; handle: string; icon: ReactNode; href: string }) {
  return (
    <motion.a 
      href={href}
      whileHover={{ y: -10 }}
      className="p-8 pb-16 rounded-[40px] bg-white border border-black/5 group relative flex flex-col gap-12 shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div className="p-4 bg-brand-purple/10 rounded-2xl group-hover:bg-brand-purple group-hover:text-white transition-all text-brand-purple">
          {icon}
        </div>
        <ArrowUpRight className="text-brand-gray group-hover:text-brand-purple" />
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gray">{title}</h4>
        <p className="text-2xl font-black tracking-tight text-brand-dark">{handle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-[40px]" />
    </motion.a>
  );
}
