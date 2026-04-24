/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Languages, Binary, BarChart3, ChevronRight } from "lucide-react";

const STRENGTHS = [
  {
    id: 1,
    title: "가치 실현가",
    subtitle: "Strategy Executor",
    icon: <BarChart3 className="text-brand-purple" size={30} />,
    description: "시장 분석을 통해 유의미한 인사이트를 도출하고, **실질적인 가치를 창출하는 현실적인 솔루션**을 제안합니다.",
  },
  {
    id: 2,
    title: "데이터 구조설계자",
    subtitle: "Logic Architect",
    icon: <Binary className="text-brand-purple" size={30} />,
    description: "SQLD, ADsP 자격을 기반으로 파편화된 정보를 분석하여 **데이터 중심의 탄탄한 서비스 로직**을 설계합니다.",
  },
  {
    id: 3,
    title: "IT 통역사",
    subtitle: "Technical Communicator",
    icon: <Languages className="text-brand-purple" size={30} />,
    description: "모바일시스템공학 전공의 엔지니어링 지식을 바탕으로 개발자와 비즈니스 사이의 **명확한 기획 언어**를 구축합니다.",
  },
];

export default function Strengths() {
  return (
    <section className="py-24 px-6 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          {STRENGTHS.map((s, index) => (
            <div key={s.id} className="flex flex-col md:flex-row flex-1 items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex-1 w-full p-10 bg-white border border-brand-purple/10 rounded-[40px] shadow-sm hover:shadow-xl hover:border-brand-purple/30 transition-all group text-center"
              >
                <div className="w-16 h-16 bg-brand-purple/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-1">{s.title}</h3>
                <p className="text-sm font-bold text-brand-purple/60 uppercase tracking-widest mb-6">{s.subtitle}</p>
                <p className="text-brand-gray text-[15px] leading-relaxed break-keep" dangerouslySetInnerHTML={{ __html: s.description.replace(/\*\*(.*?)\*\*/g, '<span class="text-brand-dark font-bold">$1</span>') }} />
              </motion.div>
              {index < STRENGTHS.length - 1 && (
                <ChevronRight className="hidden md:block text-brand-purple/20" size={32} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
