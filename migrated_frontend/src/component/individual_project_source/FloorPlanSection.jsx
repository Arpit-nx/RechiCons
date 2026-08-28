import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionEyebrow from "./sectionEyebrow.jsx";
import { normalizeImages, ease } from "./utils.js";

export default function FloorPlanSection({ data }) {
  const rawImages = normalizeImages(data);
  // Guarantee images is an array even if single image string/object is passed
  const images = Array.isArray(rawImages) 
    ? rawImages 
    : rawImages 
    ? [rawImages] 
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || (!images.length && !data.configurations?.length)) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe sensitivity threshold for drag gestures
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Safe image source extraction
  const currentImageSrc =
    typeof images[currentIndex] === "string"
      ? images[currentIndex]
      : images[currentIndex]?.src || images[currentIndex]?.url;

  return (
    <section className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-4 sm:p-8 bg-[#f7efe3] shrink-0 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
        {/* Header */}
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
          {/* Interactive Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-8 flex items-center justify-center min-h-[400px]"
          >
            <div className="relative w-full h-full min-h-[350px] sm:min-h-[450px] p-2 sm:p-3 bg-white/90 backdrop-blur-md rounded-3xl border border-black/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={currentImageSrc}
                    alt={`${data.title || "Floor Plan"} ${currentIndex + 1}`}
                    className="w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* Left & Right Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg active:scale-95 z-20"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNext}
                      aria-label="Next Image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg active:scale-95 z-20"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Pagination Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-[#d4af37]" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Configuration Panel */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
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