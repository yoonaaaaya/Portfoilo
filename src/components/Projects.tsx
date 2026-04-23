/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Calendar, Tag, Target, AlertCircle, Lightbulb, Trophy } from "lucide-react";
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
              {"01"} — Featured Projects
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl leading-tight text-brand-dark">
              I blend <span className="text-brand-purple italic font-serif">creativity</span> with <span className="text-glow text-brand-purple">technical expertise</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-brand-dark/10 px-6 py-3 rounded-full hover:border-brand-purple hover:bg-brand-purple hover:text-white transition-all text-brand-dark"
          >
            View all projects
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 border border-black/5 mb-8 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
                   {project.problem}
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
                <div className="relative aspect-video">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-brand-purple text-xs font-bold uppercase tracking-widest bg-brand-purple/10 px-4 py-2 rounded-full mb-4 inline-block">{selectedProject.category}</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-black/5 pb-12">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest">
                          <Calendar size={14} /> Timeline
                        </div>
                        <p className="text-brand-dark font-bold">{selectedProject.date}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest">
                          <Tag size={14} /> Technology
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag: any) => (
                            <span key={tag} className="text-[10px] font-bold text-brand-gray bg-gray-50 border border-black/5 px-2 py-1 rounded-md">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                      {selectedProject.problem && (
                        <div className="space-y-3">
                          <h4 className="flex items-center gap-2 text-brand-purple font-black text-xs uppercase tracking-widest">
                            <AlertCircle size={16} /> Problem Definition
                          </h4>
                          <p className="text-brand-gray leading-relaxed font-medium">{selectedProject.problem}</p>
                        </div>
                      )}
                      
                      {selectedProject.solution && (
                        <div className="space-y-3">
                          <h4 className="flex items-center gap-2 text-brand-purple font-black text-xs uppercase tracking-widest">
                            <Lightbulb size={16} /> Solution
                          </h4>
                          <p className="text-brand-gray leading-relaxed font-medium">{selectedProject.solution}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    <div className="space-y-4">
                       <h4 className="flex items-center gap-2 text-brand-purple font-black text-xs uppercase tracking-widest">
                         <Trophy size={18} /> Performance & Outcome
                       </h4>
                       <div className="p-6 bg-brand-purple/5 rounded-3xl border border-brand-purple/10">
                         <p className="text-brand-dark font-black leading-relaxed text-lg italic">"{selectedProject.outcome}"</p>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <h4 className="flex items-center gap-2 text-brand-gray font-black text-xs uppercase tracking-widest">
                         <Target size={18} className="text-brand-purple" /> My Contributions
                       </h4>
                       <div className="grid grid-cols-1 gap-4">
                        {selectedProject.contribution.map((c: any, i: number) => (
                          <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-2xl border border-black/0 hover:border-black/5 transition-all">
                            <span className="text-brand-purple font-black">0{i+1}</span>
                            <p className="text-brand-gray text-base leading-relaxed">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 bg-gray-50 border-t border-black/5 flex justify-center">
                   <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-12 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-purple transition-all"
                  >
                    이 프로젝트 닫기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
