/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Calendar, Tag, Target, AlertCircle, Lightbulb, Trophy, Briefcase } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
              {"01"} — 주요 프로젝트
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-brand-dark">
              프로젝트
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-brand-dark/10 px-6 py-3 rounded-full hover:border-brand-purple hover:bg-brand-purple hover:text-white transition-all text-brand-dark"
          >
            전체 프로젝트 보기
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-50 border border-black/5 mb-8 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white text-brand-purple px-3 py-1 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                 <div className="flex items-center gap-4 text-brand-gray text-[10px] font-bold uppercase tracking-widest">
                   <span className="text-brand-purple">[{project.category}]</span>
                   <span>/</span>
                   <span>{project.date}</span>
                 </div>
                 <div className="flex justify-between items-start pt-2">
                   <h3 className="text-2xl md:text-3xl font-bold text-brand-dark group-hover:text-brand-purple transition-colors font-sans">{project.title}</h3>
                   <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all text-brand-dark">
                      <ArrowUpRight size={20} />
                   </div>
                 </div>
                 <p className="text-brand-gray text-sm leading-relaxed max-w-md pt-2 line-clamp-2">
                   {project.summary || project.problem}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] overflow-hidden flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors text-brand-dark"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar flex-1">
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-8 md:p-14 pt-10 md:pt-14 space-y-16">
                  {/* Project Header */}
                  <div className="space-y-4">
                    <span className="text-brand-purple text-xs font-bold uppercase tracking-widest bg-brand-purple/10 px-4 py-2 rounded-full inline-block">{selectedProject.category}</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">{selectedProject.title}</h2>
                  </div>

                  {/* Overview Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-100 pb-12">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest">
                          <Calendar size={14} /> Timeline
                        </div>
                        <p className="text-brand-dark font-bold text-lg">{selectedProject.date}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest">
                          <Tag size={14} /> Technology
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag: any) => (
                            <span key={tag} className="text-[11px] font-bold text-brand-gray bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-10">
                      {selectedProject.problem && (
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2 text-brand-purple font-black text-[11px] uppercase tracking-widest">
                            <AlertCircle size={16} /> Problem & Insight
                          </h4>
                          <p className="text-brand-gray text-lg leading-relaxed font-medium">{selectedProject.problem}</p>
                        </div>
                      )}
                      
                      {selectedProject.solution && (
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2 text-brand-purple font-black text-[11px] uppercase tracking-widest">
                            <Lightbulb size={16} /> Strategy & Solution
                          </h4>
                          <p className="text-brand-gray text-lg leading-relaxed font-medium">{selectedProject.solution}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Actions Section (New) */}
                  {selectedProject.keyActions && (
                    <div className="space-y-10">
                      <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                         <Target size={18} className="text-brand-purple" /> Strategic Actions
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {selectedProject.keyActions.map((action: any, idx: number) => (
                           <div key={idx} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 space-y-4 hover:border-brand-purple/20 transition-colors group/action">
                             <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-purple font-black group-hover/action:bg-brand-purple group-hover/action:text-white transition-all">
                               0{idx + 1}
                             </div>
                             <h5 className="font-black text-brand-dark">{action.title}</h5>
                             <p className="text-sm text-brand-gray leading-relaxed font-medium">{action.desc}</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}

                  {/* Impact & Contributions */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 pt-8">
                    <div className="space-y-6">
                       <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                         <Trophy size={18} className="text-brand-purple" /> Key Impact
                       </h4>
                       <div className="p-8 bg-brand-purple/5 rounded-[40px] border border-brand-purple/10 relative overflow-hidden group/kpi">
                         <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-purple" />
                         <p className="text-brand-dark font-bold leading-relaxed text-xl">
                           {selectedProject.outcome}
                         </p>
                       </div>
                    </div>

                    <div className="space-y-8">
                       <h4 className="flex items-center gap-2 text-brand-gray font-black text-[11px] uppercase tracking-widest">
                         <Briefcase size={18} className="text-brand-purple" /> Role & Contribution
                       </h4>
                       <div className="space-y-4">
                        {selectedProject.contribution.map((c: any, i: number) => (
                          <div key={i} className="flex gap-5 p-6 hover:bg-slate-50 rounded-3xl border border-transparent hover:border-slate-100 transition-all group/item">
                            <div className="w-2 h-2 rounded-full bg-brand-purple/30 mt-3 shrink-0 group-hover/item:scale-150 group-hover/item:bg-brand-purple transition-all" />
                            <p className="text-brand-gray font-medium text-lg leading-relaxed group-hover/item:text-brand-dark transition-colors">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-6 bg-brand-dark text-white rounded-[24px] text-lg font-black hover:bg-brand-purple transition-all flex items-center justify-center gap-3 shadow-2xl"
                    >
                      <span>닫기</span>
                    </button>
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
