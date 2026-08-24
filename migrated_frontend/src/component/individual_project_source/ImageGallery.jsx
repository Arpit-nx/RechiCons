import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery({ images, alt, className = "", objectFit = "object-contain" }) {
  const [index, setIndex] = useState(0);
  const imgList = Array.isArray(images) ? images : images ? [images] : [];

  if (!imgList.length) return null;

  if (imgList.length === 1) {
    return <img src={imgList[0]} alt={alt} className={`${className} ${objectFit}`} />;
  }

  const prevStep = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? imgList.length - 1 : prev - 1));
  };

  const nextStep = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === imgList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full group overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={imgList[index]}
          alt={`${alt} - ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`${className} ${objectFit}`}
        />
      </AnimatePresence>

      <button
        onClick={prevStep}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity hover:bg-black/80"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextStep}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity hover:bg-black/80"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-3.5 py-1.5 backdrop-blur-md">
        {imgList.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#d4af37]" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}