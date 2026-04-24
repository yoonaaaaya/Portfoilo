/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, BookOpen, GraduationCap, School } from "lucide-react";
import { CERTIFICATIONS, ACTIVITIES, AWARDS, PERSONAL_INFO } from "../constants";

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 px-6 bg-brand-purple/5 border-y border-brand-purple/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand-purple">
              <School size={20} />
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark">학력 사항</h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-3xl border border-brand-purple/10 shadow-sm space-y-4"
            >
              <div>
                <p className="text-brand-dark font-black text-lg leading-tight">{PERSONAL_INFO.education.school}</p>
                <p className="text-brand-gray text-[10px] font-bold uppercase tracking-widest mt-1">{PERSONAL_INFO.education.period}</p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-purple font-black uppercase">주전공</span>
                  <span className="text-sm font-bold text-brand-dark">{PERSONAL_INFO.education.major}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-purple font-black uppercase">부전공</span>
                  <span className="text-sm font-bold text-brand-dark">{PERSONAL_INFO.education.minor}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Awards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand-purple">
              <Award size={20} />
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark">수상 내역</h3>
            </div>
            <div className="space-y-4">
              {AWARDS.map((award, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white rounded-3xl border border-brand-purple/10 shadow-sm"
                >
                  <p className="text-brand-dark font-bold text-sm leading-tight mb-1">{award.name}</p>
                  <p className="text-brand-gray text-[10px] font-medium">{award.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand-purple">
              <BookOpen size={20} />
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark">자격증</h3>
            </div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex justify-between items-center group p-3 bg-white/50 rounded-xl hover:bg-white transition-all border border-transparent hover:border-black/5">
                  <span className="text-xs text-brand-gray font-bold group-hover:text-brand-purple transition-colors">{cert.name}</span>
                  <span className="text-[10px] text-brand-gray opacity-50 font-mono">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand-purple">
              <GraduationCap size={20} />
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark">주요 활동</h3>
            </div>
            <div className="space-y-3">
              {ACTIVITIES.map((act, i) => (
                <div key={i} className="flex flex-col gap-1 p-3 bg-white/50 rounded-xl hover:bg-white transition-all border border-transparent hover:border-black/5">
                  <span className="text-xs text-brand-dark font-bold leading-tight">{act.name}</span>
                  <span className="text-[10px] text-brand-gray opacity-60 font-mono italic">{act.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
