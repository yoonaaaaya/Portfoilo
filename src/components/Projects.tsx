/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-brand-lime text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
              {"01"} — Featured Projects
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl leading-tight">
              I blend <span className="text-brand-lime italic font-serif">creativity</span> with <span className="text-glow">technical expertise</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:border-brand-lime transition-all"
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
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-muted border border-white/5 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-brand-lime text-black px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                 <div className="flex items-center gap-4 text-brand-gray text-[10px] font-bold uppercase tracking-widest">
                   <span className="text-brand-lime">[{project.category}]</span>
                   <span>/</span>
                   <span>{project.date}</span>
                 </div>
                 <div className="flex justify-between items-start pt-2">
                   <h3 className="text-2xl md:text-3xl font-bold group-hover:text-brand-lime transition-colors">{project.title}</h3>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                   </div>
                 </div>
                 <p className="text-brand-gray text-sm leading-relaxed max-w-md pt-2">
                   {project.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
