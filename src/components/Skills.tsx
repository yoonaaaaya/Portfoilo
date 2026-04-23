/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SKILLS } from "../constants";

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
          <div className="space-y-6">
             <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
              {"02"} — Tools & Skills
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-brand-dark">
              My creative<br />
              <span className="italic font-serif text-brand-purple">toolbox</span>
            </h2>
            <p className="text-brand-gray text-lg max-w-md">
              A collection of technical tools and strategic methodologies I use to structure problems and deliver polished end-to-end solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:border-brand-purple/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-xl font-bold text-brand-dark">{skillGroup.category}</h3>
                   <span className="text-brand-purple font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">{skillGroup.level}%</span>
                </div>
                
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-brand-purple/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillGroup.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-brand-purple shadow-[0_0_10px_#7c3aed]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold uppercase tracking-widest text-brand-gray bg-brand-purple/5 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
