/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, X, ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Briefcase } from "lucide-react";
import { WORK_EXPERIENCE } from "../constants";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<typeof WORK_EXPERIENCE[0] | null>(null);

  return (
    <section id="experience" className="py-32 px-6 bg-[#f8fafc] shrink-0 scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark">
            경력사항
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-purple z-10 shadow-[0_0_0_6px_rgba(79,70,229,0.15)] transition-transform group-hover:scale-125 duration-500" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div 
                    onClick={() => setSelectedExp(exp)}
                    className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-purple/20 transition-all duration-500 group cursor-pointer"
                  >
                    <div className="flex flex-col gap-1 mb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-brand-dark group-hover:text-brand-purple transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-brand-accent font-bold text-xl">{exp.role}</p>
                      
                      <div className="flex flex-wrap items-center gap-5 mt-4 text-brand-gray text-[13px] font-bold">
                        <div className="flex items-center gap-1.5 opacity-80">
                          <MapPin size={15} className="text-brand-accent" />
                          <span>{exp.team || "본사"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 opacity-80">
                          <Calendar size={15} className="text-brand-accent" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-50 w-full mb-6" />

                    <ul className="space-y-4 mb-8">
                      {exp.projects.map((project, pIdx) => (
                        <li key={pIdx} className="flex gap-4 text-brand-gray text-[15px] leading-relaxed group/item">
                          <span className="text-brand-purple font-black mt-1 text-lg leading-none">·</span>
                          <span className="group-hover/item:text-brand-dark transition-colors font-medium">{project.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2.5">
                        {Array.from(new Set(exp.projects.flatMap(p => p.skills || []))).slice(0, 3).map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-brand-gray"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-brand-purple font-black text-[13px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        Details <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
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
                className="absolute top-6 right-6 w-12 h-12 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors text-brand-dark z-20 shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar p-8 md:p-14">
                <div className="space-y-16">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-100 pb-10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-brand-purple font-bold text-xs uppercase tracking-[0.2em]">
                        <Briefcase size={14} /> Professional History
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark leading-none">{selectedExp.company}</h2>
                      <p className="text-brand-accent text-lg font-bold">{selectedExp.role}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                      <div className="flex items-center gap-2 text-brand-gray font-bold text-sm bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <Calendar size={14} className="text-brand-accent" /> {selectedExp.period}
                      </div>
                      <div className="flex items-center gap-2 text-brand-gray font-bold text-sm px-4">
                        <MapPin size={14} className="text-brand-accent" /> {selectedExp.team || "본사"}
                      </div>
                    </div>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-16">
                    {selectedExp.projects.map((project, pIdx) => (
                      <div key={pIdx} className="group/project">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-black text-lg transition-transform group-hover/project:scale-110 duration-500">
                             {pIdx + 1}
                           </div>
                           <h3 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">{project.title}</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
                          {/* Sidebar: Result/KPI and Tech */}
                          <div className="space-y-8">
                            <div className="space-y-4">
                              <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                                <TrendingUp size={16} className="text-brand-purple" /> Key Result
                              </h4>
                              <div className="p-6 bg-slate-50 rounded-[28px] border border-slate-100 relative overflow-hidden group/kpi">
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple transition-all duration-500 group-hover/kpi:w-2" />
                                <p className="text-brand-dark font-bold leading-relaxed text-sm md:text-base">
                                  {project.outcome}
                                </p>
                              </div>
                            </div>
                            
                            {project.skills && (
                              <div className="space-y-4">
                                <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                                  <Cpu size={16} className="text-brand-purple" /> Technical Context
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.skills.map(s => (
                                    <span key={s} className="text-[11px] font-bold text-brand-gray border border-slate-200 px-3 py-1.5 rounded-lg bg-white shadow-sm">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Main: Detailed Contributions */}
                          <div className="space-y-6">
                            <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                               <CheckCircle2 size={16} className="text-brand-purple" /> Action & Contribution
                            </h4>
                            <div className="space-y-4">
                              {project.contributions.map((detail, dIdx) => (
                                <div key={dIdx} className="flex gap-5 group/item">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/30 mt-2.5 shrink-0 group-hover/item:bg-brand-purple group-hover/item:scale-150 transition-all" />
                                  <p className="text-brand-gray font-medium leading-relaxed group-hover:text-brand-dark transition-colors">{detail}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {pIdx < selectedExp.projects.length - 1 && (
                          <div className="h-px bg-slate-100 w-full mt-16" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedExp(null)}
                      className="w-full py-5 bg-brand-dark text-white rounded-2xl font-bold tracking-tight hover:bg-brand-purple transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      <span>닫기</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
