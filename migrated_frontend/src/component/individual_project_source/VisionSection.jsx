import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { ease } from "./utils.js";

export default function VisionSection({ data }) {
  if (!data?.specs?.length) return null;

  return (
    <section className="relative h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <SectionEyebrow>Architectural Concept</SectionEyebrow>
          <h2 className="mt-3 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "The Vision"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
          {data.specs.map((spec, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -350 : 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: Math.floor(idx / 2) * 0.15,
                  ease,
                }}
                className="flex flex-col items-center justify-center p-8 sm:p-12 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-3xl border border-white/10 text-center min-h-[200px] sm:min-h-[240px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02]"
              >
                <span className="font-serif text-4xl sm:text-5xl font-normal text-[#d4af37]">
                  {spec.value}
                </span>
                <span className="mt-4 text-sm sm:text-base font-light text-gray-300 tracking-wider">
                  {spec.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}