/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { STATS } from "../constants";

export default function StatsMarquee() {
  const repeatedStats = [...STATS, ...STATS, ...STATS, ...STATS];

  return (
    <div className="py-12 border-y border-black/5 bg-brand-purple/5 overflow-hidden relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-12 whitespace-nowrap px-4"
      >
        {repeatedStats.map((stat, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-3xl md:text-5xl font-black text-brand-purple">
              {stat.value}
            </span>
            <span className="text-sm md:text-lg font-bold text-brand-dark uppercase tracking-widest opacity-80">
              {stat.label}
            </span>
            <Star size={24} className="text-brand-purple fill-brand-purple opacity-40 mx-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
