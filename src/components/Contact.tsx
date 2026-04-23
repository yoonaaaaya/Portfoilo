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
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
           <span className="text-brand-lime text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
            {"06"} — Contact Me
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">I'm all over the <span className="text-brand-lime italic font-serif">internet</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard 
            title="LinkedIn" 
            handle="/yoon-park" 
            icon={<Linkedin className="text-brand-lime" />} 
            href={PERSONAL_INFO.socials.linkedin} 
          />
          <ContactCard 
            title="Instagram" 
            handle="@yoon_park" 
            icon={<Instagram className="text-brand-lime" />} 
            href={PERSONAL_INFO.socials.instagram} 
          />
          <ContactCard 
            title="GitHub" 
            handle="/yoon-park" 
            icon={<Github className="text-brand-lime" />} 
            href={PERSONAL_INFO.socials.github} 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-12 rounded-[50px] bg-brand-lime flex flex-col items-center justify-center text-black text-center"
        >
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            Have a project in mind?<br />
            Let's build it together.
          </h3>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-brand-muted transition-all"
          >
            <Mail />
            <span>{PERSONAL_INFO.email}</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-gray text-xs font-bold uppercase tracking-widest">
           <div>© 2026 {PERSONAL_INFO.name} — All Rights Reserved</div>
           <div className="flex gap-8">
             <a href="#" className="hover:text-brand-lime">Privacy Policy</a>
             <a href="#" className="hover:text-brand-lime">Terms of Service</a>
           </div>
           <div>Handcrafted in Seoul</div>
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
      className="p-8 pb-16 rounded-[40px] bg-brand-muted border border-white/10 group relative flex flex-col gap-12"
    >
      <div className="flex justify-between items-start">
        <div className="p-4 bg-brand-dark rounded-2xl group-hover:bg-brand-lime group-hover:text-black transition-all">
          {icon}
        </div>
        <ArrowUpRight className="text-brand-gray group-hover:text-brand-lime" />
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gray">{title}</h4>
        <p className="text-2xl font-black tracking-tight">{handle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-[40px]" />
    </motion.a>
  );
}
