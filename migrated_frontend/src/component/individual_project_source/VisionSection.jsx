import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { ease } from "./utils.js";

export default function VisionSection({ data }) {
  if (!data?.specs?.length) return null;

  const count = data.specs.length;

  // Adapt grid layout dynamically based on item count
  const getGridCols = () => {
    if (count <= 2) return "grid-cols-1 sm:grid-cols-2 max-w-2xl";
    if (count <= 4) return "grid-cols-1 sm:grid-cols-2 max-w-4xl";
    if (count <= 6) return "grid-cols-2 md:grid-cols-3 max-w-5xl";
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl";
  };

  // Adjust card padding and font size based on item count
  const getCardSizeClass = () => {
    if (count > 4) {
      return "p-4 sm:p-6 min-h-[130px] sm:min-h-[160px]";
    }
    return "p-6 sm:p-8 md:p-10 min-h-[160px] sm:min-h-[220px]";
  };

  // Dynamic horizontal entrance offset matching grid column layout
  const getInitialX = (idx) => {
    if (count <= 4) {
      return idx % 2 === 0 ? -250 : 250;
    }
    if (count <= 6) {
      const col = idx % 3;
      if (col === 0) return -250;
      if (col === 1) return 0;
      return 250;
    }
    const col = idx % 4;
    return col < 2 ? -250 : 250;
  };

  return (
    <section className="relative min-h-screen lg:h-screen w-full snap-start snap-always flex items-center justify-center p-4 sm:p-8 bg-[#f7efe3] shrink-0 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 my-auto py-8 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <SectionEyebrow>Architectural Concept</SectionEyebrow>
          <h2 className="mt-2 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "The Vision"}
          </h2>
        </motion.div>

        <div className={`grid ${getGridCols()} gap-4 sm:gap-6 w-full px-2`}>
          {data.specs.map((spec, idx) => {
            const initialX = getInitialX(idx);
            const initialY = initialX === 0 ? 60 : 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: initialX, y: initialY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: Math.floor(idx / 2) * 0.12,
                  ease,
                }}
                className={`flex flex-col items-center justify-center ${getCardSizeClass()} bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-2xl sm:rounded-3xl border border-white/10 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.03] hover:border-[#d4af37]/40`}
              >
                <span
                  className={`font-serif font-normal text-[#d4af37] ${
                    count > 4 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
                  }`}
                >
                  {spec.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-light text-gray-300 tracking-wider">
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