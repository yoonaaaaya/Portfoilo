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
              {"02"} — 사용 가능 툴
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-brand-dark">
              사용 가능<br />
              <span className="italic font-serif text-brand-purple">툴</span>
            </h2>
            <p className="text-brand-gray text-lg max-w-md">
              효율적인 업무 수행을 위해 활용하는 핵심 툴킷입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:border-brand-purple/30 transition-all group"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-dark flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map(skill => (
                      <span key={skill} className="text-xs font-medium text-brand-gray border border-black/5 px-3 py-1.5 rounded-full hover:bg-brand-purple/5 hover:text-brand-purple transition-colors">
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
