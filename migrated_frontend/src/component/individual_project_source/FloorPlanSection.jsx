import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import ImageGallery from "./ImageGallery.jsx";
import { normalizeImages, ease } from "./utils.js";

export default function FloorPlanSection({ data }) {
  const images = normalizeImages(data);
  if (!data || (!images.length && !data.configurations?.length)) return null;

  return (
    <section className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-4 sm:p-8 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-3xl"
        >
          <SectionEyebrow>Layout & Planning</SectionEyebrow>
          <h2 className="mt-1 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "Typical Floor Plan"}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -350 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-8 flex items-center justify-center min-h-[400px]"
          >
            <div className="w-full h-full p-2 sm:p-3 bg-white/90 backdrop-blur-md rounded-3xl border border-black/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden">
              <ImageGallery
                images={images}
                alt={data.title || "Typical Floor Plan"}
                className="w-full h-full max-h-[70vh] sm:max-h-[75vh] rounded-2xl"
                objectFit="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37]">
                Flat Areas
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1 mb-5">
                Configuration
              </h3>

              {data.configurations && (
                <div className="space-y-2.5">
                  {data.configurations.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm sm:text-base border-b border-white/10 pb-1.5"
                    >
                      <span className="font-serif text-gray-200">{item.label}</span>
                      <span className="font-serif text-[#d4af37] font-medium">
                        {item.area}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {data.note && (
              <p className="mt-6 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-white/10 pt-3">
                {data.note}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}