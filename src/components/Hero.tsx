/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function Hero() {
  const [profileImg, setProfileImg] = useState("https://github.com/yoonaaaaya/Portfoilo_Image/blob/8ce77080df9b76fa4c2eb99ce9c1d2275ebc7a18/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_%ED%9D%B0%EC%83%89.jpg?raw=true");

  const handleImageError = () => {
    if (profileImg.includes('blob')) {
      setProfileImg("https://raw.githubusercontent.com/yoonaaaaya/Portfoilo_Image/8ce77080df9b76fa4c2eb99ce9c1d2275ebc7a18/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84_%ED%9D%B0%EC%83%89.jpg");
    }
  };

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
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[80px] overflow-hidden border-2 border-brand-purple/20 p-2 bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={profileImg} 
                  alt={PERSONAL_INFO.koreanName}
                  className="w-full h-full object-cover rounded-[70px]"
                  onError={handleImageError}
                />
              </div>
              <div className="absolute inset-0 rounded-[80px] border border-brand-purple/10 pointer-events-none group-hover:border-brand-purple/30 transition-colors" />
            </div>

            <div className="flex gap-4">
              <SocialIcon icon={<Github size={24} />} href={PERSONAL_INFO.socials.github} label="GitHub" hoverColor="hover:bg-[#24292e]" />
              <SocialIcon icon={<Linkedin size={24} />} href={PERSONAL_INFO.socials.linkedin} label="LinkedIn" hoverColor="hover:bg-[#0077b5]" />
              <SocialIcon icon={<Mail size={24} />} href={`mailto:${PERSONAL_INFO.email}`} label="Contact" hoverColor="hover:bg-brand-purple" />
            </div>

            <div className="pt-8 border-t border-brand-purple/10 w-full md:max-w-xs transition-all duration-700">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple/60">Location</span>
                    <span className="text-sm font-bold text-brand-dark">Yongin, Korea</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple/60">Current Focus</span>
                  <span className="text-sm font-bold text-brand-dark">Service Planning & Analysis</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Available for Opportunities</span>
                </div>
              </div>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tighter text-brand-dark">
                아이디어를 <span className="text-brand-purple">구조화</span>하여<br className="hidden lg:block" /> 실현 가능한 <span className="text-brand-purple italic font-serif">논리적 솔루션</span>을 만드는 기획자입니다.
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
                <span className="relative z-10 uppercase tracking-tight">수행 프로젝트 살펴보기</span>
                <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href, label, hoverColor }: { icon: ReactNode; href: string; label: string; hoverColor: string }) {
  return (
    <a 
      href={href} 
      title={label}
      className={`p-4 bg-white border border-black/5 shadow-sm rounded-full transition-all text-brand-gray hover:text-white ${hoverColor} hover:scale-110 active:scale-95`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
