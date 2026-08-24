import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery.jsx";
import { normalizeImages, ease } from "./utils.js";

export default function HeroSection({ hero, showCtas = true, available = {} }) {
  const heroImages = normalizeImages(hero);

  return (
    <section className="relative flex h-[calc(100vh-80px)] w-full items-end pb-[70px] overflow-hidden bg-black text-white snap-start">
      <div className="absolute inset-0 h-full w-full">
        <ImageGallery
          images={heroImages}
          alt={hero?.title || "Project Hero"}
          className="h-full w-full"
          objectFit="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl space-y-4 sm:space-y-6"
        >
          {hero?.badge && (
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>{hero.badge}</span>
            </div>
          )}

          <h1 className="font-serif text-4xl font-normal uppercase tracking-wider text-white sm:text-6xl md:text-7xl">
            {hero?.title}
          </h1>

          {hero?.subtitle && (
            <p className="max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-lg">
              {hero.subtitle}
            </p>
          )}

          {showCtas && (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {available.residences && (
                <a
                  href="#residences"
                  className="rounded-full border border-white/30 bg-black/30 px-6 py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/60"
                >
                  {hero?.primaryCta || "Luxury Residences"}
                </a>
              )}
              {available.amenities && (
                <a
                  href="#amenities"
                  className="rounded-full border border-amber-500/60 bg-amber-500/10 px-6 py-2.5 text-xs sm:text-sm font-medium text-amber-200 backdrop-blur-md transition-all hover:bg-amber-500/20 hover:border-amber-400"
                >
                  {hero?.secondaryCta || "Premium Amenities"}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}