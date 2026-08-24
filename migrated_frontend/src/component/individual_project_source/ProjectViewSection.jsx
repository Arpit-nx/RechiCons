import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import ImageGallery from "./ImageGallery.jsx";
import { normalizeImages, ease } from "./utils.js";

export default function ProjectViewSection({ data, fallbackImages = [] }) {
  const images = normalizeImages(data);
  const finalImages = images.length ? images : fallbackImages;
  if (!finalImages.length) return null;

  return (
    <section className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-3xl"
        >
          <SectionEyebrow>Visual Showcase</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-2 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide"
          >
            {data?.title || "Project View"}
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="w-full max-w-5xl p-3 sm:p-5 bg-white/95 backdrop-blur-md rounded-3xl border border-black/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37] mb-3 px-1">
            Photo Gallery
          </span>
          <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative">
            <ImageGallery
              images={finalImages}
              alt="Project View Gallery"
              className="w-full h-full rounded-2xl"
              objectFit="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}