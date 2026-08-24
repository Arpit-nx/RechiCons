import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1]

// ---------- Helpers ----------
function normalizeImages(data) {
  if (!data) return []
  if (Array.isArray(data)) return data
  if (Array.isArray(data.images)) return data.images
  if (Array.isArray(data.image)) return data.image
  if (data.image) return [data.image]
  return []
}

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  )
}

// Reusable Image Gallery
function ImageGallery({ images, alt, className = "", objectFit = "object-contain" }) {
  const [index, setIndex] = useState(0)
  const imgList = Array.isArray(images) ? images : [images]

  if (!imgList.length) return null

  if (imgList.length === 1) {
    return (
      <img
        src={imgList[0]}
        alt={alt}
        className={`${className} ${objectFit}`}
      />
    )
  }

  const prevStep = (e) => {
    e.stopPropagation()
    setIndex((prev) => (prev === 0 ? imgList.length - 1 : prev - 1))
  }

  const nextStep = (e) => {
    e.stopPropagation()
    setIndex((prev) => (prev === imgList.length - 1 ? 0 : prev + 1))
  }

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
              e.stopPropagation()
              setIndex(i)
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#d4af37]" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ---------- Coming Soon Placeholder ----------
function ComingSoonSection({ title = "Project Details" }) {
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
  )
}

// ---------- Individual Section Components ----------
function VisionSection({ data }) {
  if (!data?.specs?.length) return null

  return (
    <section className="relative h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#ebdcc8]/80 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <SectionEyebrow>Architectural Concept</SectionEyebrow>
          <h2 className="mt-3 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "The Vision"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
          {data.specs.map((spec, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -350 : 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: Math.floor(idx / 2) * 0.15,
                  ease,
                }}
                className="flex flex-col items-center justify-center p-8 sm:p-12 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-3xl border border-white/10 text-center min-h-[200px] sm:min-h-[240px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02]"
              >
                <span className="font-serif text-4xl sm:text-5xl font-normal text-[#d4af37]">
                  {spec.value}
                </span>
                <span className="mt-4 text-sm sm:text-base font-light text-gray-300 tracking-wider">
                  {spec.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FloorPlanSection({ data }) {
  const images = normalizeImages(data)
  if (!data || (!images.length && !data.configurations?.length)) return null

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
  )
}

function ResidencesSection({ data }) {
  if (!data?.units?.length) return null

  const count = data.units.length
  let gridLayout = "grid-cols-1 sm:grid-cols-2 max-w-4xl"
  if (count === 1) gridLayout = "grid-cols-1 max-w-xl"
  else if (count === 3) gridLayout = "grid-cols-1 sm:grid-cols-3 max-w-6xl"
  else if (count > 4) gridLayout = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl"

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
            const isLeft = count === 3 ? idx % 3 === 0 : idx % 2 === 0
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AmenitiesSection({ data }) {
  if (!data?.items?.length) return null

  return (
    <section
      id="amenities"
      className="relative min-h-screen w-full snap-start snap-always flex items-center justify-center p-6 sm:p-12 bg-[#f7efe3] shrink-0 overflow-hidden"
    >
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
          <SectionEyebrow>Modern Living</SectionEyebrow>
          <h2 className="mt-2 font-serif text-4xl sm:text-6xl font-normal text-gray-900 tracking-wide">
            {data.title || "Amenities"}
          </h2>
          {data.subtitle && (
            <p className="mt-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
          {data.items.map((item, idx) => {
            const col = idx % 3
            const initialX = col === 0 ? -300 : col === 2 ? 300 : 0
            const initialY = col === 1 ? 50 : 0
            const formattedNumber = String(idx + 1).padStart(2, "0")
            const label = typeof item === "string" ? item : item.name || item.title

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
                className="flex items-center gap-4 p-5 sm:p-6 bg-[#2d2c2a]/90 backdrop-blur-xl text-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10 transition-transform hover:scale-[1.02]"
              >
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#d4af37] shrink-0">
                  {formattedNumber}
                </span>
                <div className="h-7 w-[1px] bg-white/15" />
                <span className="font-serif text-base sm:text-lg text-gray-100 font-normal tracking-wide">
                  {label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SpecificationsSection({ data }) {
  if (!data?.items?.length) return null

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
            const col = idx % 3
            const initialX = col === 0 ? -300 : col === 2 ? 300 : 0
            const initialY = col === 1 ? 50 : 0

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
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ConnectivitySection({ data }) {
  const images = normalizeImages(data)
  if (!data || (!data.mapUrl && !images.length && !data.points?.length)) return null

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
  )
}

function ProjectViewSection({ data, fallbackImages = [] }) {
  const images = normalizeImages(data)
  const finalImages = images.length ? images : fallbackImages
  if (!finalImages.length) return null

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
  )
}

// ---------- Main Template ----------
export default function ProjectTemplate({ data }) {
  if (!data) return null

  const {
    hero,
    vision,
    floorPlan,
    residences,
    amenities,
    specifications,
    connectivity,
    projectView,
    comingSoon = false,          // global flag
    sectionsOrder,               // optional custom order
  } = data

  const heroImages = normalizeImages(hero)

  // Decide which sections actually have content
  const available = {
    vision: !comingSoon && vision?.specs?.length > 0,
    floorPlan: !comingSoon && (normalizeImages(floorPlan).length > 0 || floorPlan?.configurations?.length > 0),
    residences: !comingSoon && residences?.units?.length > 0,
    amenities: !comingSoon && amenities?.items?.length > 0,
    specifications: !comingSoon && specifications?.items?.length > 0,
    connectivity: !comingSoon && (connectivity?.mapUrl || normalizeImages(connectivity).length > 0 || connectivity?.points?.length > 0),
    projectView: !comingSoon && (normalizeImages(projectView).length > 0 || heroImages.length > 0),
  }

  // Default order (you can override with data.sectionsOrder)
  const defaultOrder = [
    "vision",
    "floorPlan",
    "residences",
    "amenities",
    "specifications",
    "connectivity",
    "projectView",
  ]

  const order = Array.isArray(sectionsOrder) && sectionsOrder.length
    ? sectionsOrder
    : defaultOrder

  // Count how many real sections we have
  const hasAnyDetails = Object.values(available).some(Boolean)

  return (
    <div className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">

      {/* 1. HERO – always shown */}
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

            {hasAnyDetails && (
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {available.residences && (
                  <a
                    href="#residences"
                    className="rounded-full border border-white/30 bg-black/30 px-6 py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/60"
                  >
                    {hero.primaryCta || "Luxury Residences"}
                  </a>
                )}
                {available.amenities && (
                  <a
                    href="#amenities"
                    className="rounded-full border border-amber-500/60 bg-amber-500/10 px-6 py-2.5 text-xs sm:text-sm font-medium text-amber-200 backdrop-blur-md transition-all hover:bg-amber-500/20 hover:border-amber-400"
                  >
                    {hero.secondaryCta || "Premium Amenities"}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 2. Render only the sections that have data */}
      {hasAnyDetails ? (
        order.map((key) => {
          if (!available[key]) return null

          switch (key) {
            case "vision":
              return <VisionSection key="vision" data={vision} />
            case "floorPlan":
              return <FloorPlanSection key="floorPlan" data={floorPlan} />
            case "residences":
              return <ResidencesSection key="residences" data={residences} />
            case "amenities":
              return <AmenitiesSection key="amenities" data={amenities} />
            case "specifications":
              return <SpecificationsSection key="specifications" data={specifications} />
            case "connectivity":
              return <ConnectivitySection key="connectivity" data={connectivity} />
            case "projectView":
              return (
                <ProjectViewSection
                  key="projectView"
                  data={projectView}
                  fallbackImages={heroImages}
                />
              )
            default:
              return null
          }
        })
      ) : (
        /* Everything is coming soon */
        <ComingSoonSection title="Project Details" />
      )}
    </div>
  )
}