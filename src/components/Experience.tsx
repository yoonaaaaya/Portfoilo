/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Briefcase, Calendar, CheckCircle2, TrendingUp, Cpu } from "lucide-react";
import { WORK_EXPERIENCE } from "../constants";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<typeof WORK_EXPERIENCE[0] | null>(null);

  return (
    <section id="experience" className="py-32 px-6 bg-[#f8f9fa] shrink-0 scroll-mt-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div className="space-y-4">
             <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
              Work History
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-brand-dark">
              Professional <br/><span className="text-brand-purple underline decoration-brand-purple/20 decoration-8 underline-offset-8 font-serif italic">Experiences</span>
            </h2>
          </div>
          <p className="text-brand-gray text-lg max-w-md mt-6 font-medium leading-relaxed">
            실무 현장에서 문제를 정의하고 구조화하며 쌓아온 경험들입니다. 각 항목을 클릭하여 상세 성과를 확인하실 수 있습니다.
          </p>
        </div>

        <div className="space-y-10">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div 
               key={exp.company}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.6 }}
               onClick={() => setSelectedExp(exp)}
               className="group relative bg-white border border-black/5 p-10 md:p-14 flex flex-col md:grid md:grid-cols-[1.5fr_2.5fr_1fr] gap-10 rounded-[50px] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] hover:-translate-y-2 cursor-pointer"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark group-hover:text-brand-purple transition-colors mb-4">{exp.company}</h3>
                <div className="flex items-center gap-2 text-brand-gray text-xs font-bold bg-gray-100 w-fit px-4 py-2 rounded-full border border-black/5">
                  <Calendar size={14} className="text-brand-purple" />
                  {exp.period}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-purple text-white text-[10px] font-black uppercase px-2.5 py-1.5 rounded-lg shadow-lg shadow-brand-purple/20">Role</span>
                  <span className="text-2xl font-bold text-brand-dark tracking-tight">{exp.role}</span>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                   {exp.projects.map((p, i) => (
                     <span key={i} className="text-[11px] font-bold text-brand-gray bg-gray-50 border border-black/5 px-4 py-2 rounded-xl group-hover:border-brand-purple/20 group-hover:bg-brand-purple/5 group-hover:text-brand-purple transition-all shadow-sm">
                        {p.title}
                     </span>
                   ))}
                </div>
              </div>

              <div className="flex md:justify-end items-center">
                <div className="flex items-center gap-3 text-brand-purple font-black text-xs uppercase tracking-widest bg-brand-purple/10 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-lg shadow-brand-purple/10">
                  Full Report <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Decorative line on hover */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-brand-purple/10 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors text-brand-dark z-20"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
                <div className="space-y-12">
                  {/* Header */}
                  <div className="space-y-4 border-b border-black/5 pb-8">
                    <div className="flex items-center gap-2 text-brand-purple font-black text-xs uppercase tracking-widest">
                      <Briefcase size={16} /> Work Experience
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                      <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">{selectedExp.company}</h2>
                        <p className="text-brand-purple text-xl font-bold mt-1">{selectedExp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-brand-gray font-bold text-sm bg-gray-50 px-4 py-2 rounded-xl border border-black/5">
                        <Calendar size={14} className="text-brand-purple" /> {selectedExp.period}
                      </div>
                    </div>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-16">
                    {selectedExp.projects.map((project, pIdx) => (
                      <div key={pIdx} className="space-y-8 relative">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-black italic shadow-lg shadow-brand-purple/20">
                             P{pIdx + 1}
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">{project.title}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                          <div className="space-y-6">
                            <div className="p-6 bg-brand-purple/5 rounded-3xl border border-brand-purple/10 space-y-3">
                               <div className="flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest">
                                 <TrendingUp size={14} /> Key Outcome
                               </div>
                               <p className="text-brand-dark font-black leading-snug text-lg">{project.outcome}</p>
                            </div>
                            
                            {project.skills && (
                              <div className="space-y-3 px-2">
                                <div className="flex items-center gap-2 text-brand-gray font-black text-[10px] uppercase tracking-widest">
                                  <Cpu size={14} /> Skills & Tools
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {project.skills.map(s => (
                                    <span key={s} className="text-[10px] font-bold text-brand-purple border border-brand-purple/30 px-2 py-1 rounded-md bg-brand-purple/5">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="space-y-6">
                            <div className="flex items-center gap-2 text-brand-gray font-black text-[10px] uppercase tracking-widest">
                               <CheckCircle2 size={14} className="text-brand-purple" /> Roles & Contributions
                            </div>
                            <div className="space-y-4">
                              {project.contributions.map((detail, dIdx) => (
                                <div key={dIdx} className="flex gap-4 group">
                                  <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple text-[10px] font-black shrink-0 mt-0.5 group-hover:bg-brand-purple group-hover:text-white transition-all">
                                    {dIdx + 1}
                                  </div>
                                  <p className="text-brand-gray font-medium leading-relaxed group-hover:text-brand-dark transition-colors">{detail}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {pIdx < selectedExp.projects.length - 1 && (
                          <div className="h-px bg-black/5 w-full mt-16" />
                        )}
                      </div>
                    ))}
                  </div>

                  <motion.button 
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedExp(null)}
                    className="w-full py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-purple transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-dark/10"
                  >
                    <span>Close Full Report</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
