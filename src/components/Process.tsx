/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROCESS } from "../constants";

export default function Process() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <span className="text-brand-lime text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
            {"03"} — My Process
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">How it <span className="text-brand-lime italic font-serif">works</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {PROCESS.map((item, idx) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:grid md:grid-cols-[100px_1fr_4fr_200px] items-center gap-8 p-12 rounded-[40px] bg-brand-muted/30 border border-white/5 hover:bg-white/5 transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gray group-hover:text-brand-lime transition-colors">
                {item.title}
              </span>
              <span className="text-5xl font-black text-brand-lime opacity-40 group-hover:opacity-100 transition-opacity font-mono">
                /{item.step}
              </span>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-glow transition-all">{item.title}</h3>
                <p className="text-brand-gray text-base leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
              <div className="text-right hidden md:block">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                   {idx === 0 ? "Timeline: 1-2 weeks" : idx === 1 ? "Timeline: 2-3 weeks" : "On-going"}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
