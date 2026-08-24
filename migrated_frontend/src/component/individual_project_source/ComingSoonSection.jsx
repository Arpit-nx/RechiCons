import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { ease } from "./utils.js";

export default function ComingSoonSection({ title = "Project Details" }) {
  return (
    <section className="relative h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center justify-center p-10 sm:p-16 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] text-center w-full"
        >
          <SectionEyebrow>Upcoming Information</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] my-6" />
          <p className="text-base sm:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
            Property details to be uploaded very soon......
          </p>
        </motion.div>
      </div>
    </section>
  );
}