import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { ease } from "./utils.js";

export default function ResidencesSection({ data }) {
  if (!data?.units?.length) return null;

  const count = data.units.length;
  let gridLayout = "grid-cols-1 sm:grid-cols-2 max-w-4xl";
  if (count === 1) gridLayout = "grid-cols-1 max-w-xl";
  else if (count === 3) gridLayout = "grid-cols-1 sm:grid-cols-3 max-w-6xl";
  else if (count > 4) gridLayout = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl";

  return (
    <section
      id="residences"
      className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-3xl"
        >
          <SectionEyebrow>Living Spaces</SectionEyebrow>
          <h2 className="mt-2 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "Residences"}
          </h2>
          {data.subtitle && (
            <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className={`grid ${gridLayout} gap-6 sm:gap-8 w-full justify-center`}>
          {data.units.map((unit, idx) => {
            const isLeft = count === 3 ? idx % 3 === 0 : idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -350 : 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: Math.floor(idx / (count === 3 ? 3 : 2)) * 0.15,
                  ease,
                }}
                className="flex flex-col justify-between p-8 sm:p-10 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] border border-white/10 transition-transform hover:scale-[1.02] min-h-[220px] sm:min-h-[260px]"
              >
                <div>
                  <span className="text-xs sm:text-sm font-light tracking-wider text-gray-300 uppercase">
                    {unit.type}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#d4af37] font-normal mt-1 mb-3">
                    {unit.size}
                  </h3>
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/60 via-white/10 to-transparent my-3" />
                  {unit.features && (
                    <ul className="space-y-2">
                      {unit.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start text-xs sm:text-sm text-gray-300 font-light leading-snug"
                        >
                          <span className="text-[#d4af37] mr-2 font-bold">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}