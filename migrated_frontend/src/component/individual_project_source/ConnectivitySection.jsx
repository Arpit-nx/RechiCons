import React from "react";
import { motion } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import ImageGallery from "./ImageGallery.jsx";
import { normalizeImages, ease } from "./utils.js";

export default function ConnectivitySection({ data }) {
  const images = normalizeImages(data);
  if (!data || (!data.mapUrl && !images.length && !data.points?.length)) return null;

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
          <SectionEyebrow>Location Advantage</SectionEyebrow>
          <h2 className="mt-2 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "Connectivity"}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="w-full max-w-5xl p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-3xl border border-black/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37] mb-2 px-1">
            Location Map
          </span>
          <div className="w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center">
            {data.mapUrl ? (
              <iframe
                src={data.mapUrl}
                title={data.title || "Location Map"}
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <ImageGallery
                images={images}
                alt={data.title || "Site Location Plan"}
                className="w-full h-full rounded-2xl"
                objectFit="object-contain"
              />
            )}
          </div>
        </motion.div>

        {data.points && (
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {data.points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    type: "spring",
                    stiffness: 110,
                    damping: 14,
                    delay: idx * 0.08,
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center justify-between p-4 sm:p-5 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-2xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span className="font-serif text-gray-200 text-sm sm:text-base font-normal">
                      {pt.label}
                    </span>
                  </div>
                  {pt.distance && (
                    <span className="font-serif text-[#d4af37] font-medium text-xs sm:text-sm shrink-0 ml-2">
                      {pt.distance}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}