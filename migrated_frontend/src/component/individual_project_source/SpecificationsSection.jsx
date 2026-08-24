import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { ease } from "./utils.js";

export default function SpecificationsSection({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-3xl"
        >
          <SectionEyebrow>Craftsmanship</SectionEyebrow>
          <h2 className="mt-2 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "Specifications"}
          </h2>
          {data.subtitle && (
            <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
          {data.items.map((item, idx) => {
            const col = idx % 3;
            const initialX = col === 0 ? -300 : col === 2 ? 300 : 0;
            const initialY = col === 1 ? 50 : 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: initialX, y: initialY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: Math.floor(idx / 3) * 0.12,
                  ease,
                }}
                className="flex flex-col justify-center p-6 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10 transition-transform hover:scale-[1.02] min-h-[110px]"
              >
                <h3 className="font-serif text-lg sm:text-xl text-[#d4af37] font-normal tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}