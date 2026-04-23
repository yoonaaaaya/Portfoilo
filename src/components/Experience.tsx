/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WORK_EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-brand-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="space-y-4">
             <span className="text-brand-lime text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
              Work History
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Selected <span className="text-glow underline decoration-brand-lime decoration-4 underline-offset-8">Experiences</span>
            </h2>
          </div>
          <p className="text-brand-gray text-lg max-w-md mt-6">
            Detailed journey through industry-leading companies where I applied my planning and analysis skills.
          </p>
        </div>

        <div className="space-y-4">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div 
               key={exp.company}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group border-b border-white/10 py-12 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-8 hover:bg-white/5 px-8 rounded-3xl transition-all"
            >
              <div>
                <h3 className="text-3xl font-black tracking-tight group-hover:text-brand-lime transition-colors">{exp.company}</h3>
                <span className="text-brand-gray text-sm font-medium">{exp.period}</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-lime text-black text-[10px] font-black uppercase px-2 py-1 rounded-sm">Role</span>
                  <span className="text-xl font-bold">{exp.role}</span>
                </div>
                <p className="text-brand-gray font-medium">{exp.task}</p>
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-sm text-brand-gray/80">
                      <span className="text-brand-lime mt-1.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex md:justify-end items-start pt-2">
                <div className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
