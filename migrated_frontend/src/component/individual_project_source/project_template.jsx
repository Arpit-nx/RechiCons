import React from "react"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  Home,
  ShieldCheck,
  Building,
} from "lucide-react"

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease },
  }),
}

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  )
}

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
  } = data

  return (
    <div className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900">
      
      {/* 1. HERO SINGLE PHOTO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[800px] w-full overflow-hidden bg-[#f7efe3]">
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="absolute bottom-12 left-0 right-0 z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            {hero.badge && (
              <span className="mb-3 inline-block rounded-md bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                {hero.badge}
              </span>
            )}
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className="mt-3 max-w-xl text-base text-gray-200 sm:text-lg">
                {hero.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* 2. VISION SECTION (Left: Image, Right: Writing) */}
      <section className="relative py-20 sm:py-28 bg-[#fbf8f3]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.12)]"
            >
              <img
                src={vision.image}
                alt={vision.title || "Project Vision"}
                className="h-[400px] w-full object-cover sm:h-[480px]"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp}>
                <SectionEyebrow>Architectural Concept</SectionEyebrow>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
              >
                {vision.title || "The Vision"}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg"
              >
                {Array.isArray(vision.text) ? (
                  vision.text.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{vision.text}</p>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TYPICAL FLOOR PLAN SECTION (Left: Image, Right: Writing) */}
      <section className="relative py-20 sm:py-28 bg-[#f7efe3]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white p-4 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.1)]"
            >
              <img
                src={floorPlan.image}
                alt={floorPlan.title || "Typical Floor Plan"}
                className="h-[380px] w-full object-contain sm:h-[450px]"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp}>
                <SectionEyebrow>Layout & Planning</SectionEyebrow>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
              >
                {floorPlan.title || "Typical Floor Plan"}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg"
              >
                {Array.isArray(floorPlan.text) ? (
                  floorPlan.text.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{floorPlan.text}</p>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. RESIDENCES SECTION (Writing Only) */}
      <section className="relative py-20 sm:py-28 bg-[#fbf8f3]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="rounded-2xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-sm"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Living Spaces</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
            >
              {residences.title || "The Residences"}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              {Array.isArray(residences.text) ? (
                residences.text.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{residences.text}</p>
              )}
            </motion.div>

            {residences.highlights && (
              <motion.ul variants={fadeUp} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {residences.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </div>
      </section>

      {/* 5. AMENITIES SECTION (Writing Only) */}
      <section className="relative py-20 sm:py-28 bg-[#f7efe3]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Lifestyle Features</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
            >
              {amenities.title || "Amenities"}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              {Array.isArray(amenities.text) ? (
                amenities.text.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{amenities.text}</p>
              )}
            </motion.div>
          </motion.div>

          {amenities.items && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease }}
                  className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Sparkles className="h-5 w-5 text-amber-600 mb-3" />
                  <p className="font-display text-lg font-medium text-gray-900">{item.title || item}</p>
                  {item.description && (
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. SPECIFICATIONS SECTION (Writing Only) */}
      <section className="relative py-20 sm:py-28 bg-[#fbf8f3]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Quality Standard</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
            >
              {specifications.title || "Specifications"}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              {Array.isArray(specifications.text) ? (
                specifications.text.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{specifications.text}</p>
              )}
            </motion.div>

            {specifications.items && (
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {specifications.items.map((spec, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="font-display text-xl font-medium text-gray-900">{spec.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{spec.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 7. CONNECTIVITY SECTION (Writing Only) */}
      <section className="relative py-20 sm:py-28 bg-[#f7efe3]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="rounded-2xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-sm"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Location Advantage</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-medium text-gray-900 sm:text-4xl"
            >
              {connectivity.title || "Connectivity"}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              {Array.isArray(connectivity.text) ? (
                connectivity.text.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{connectivity.text}</p>
              )}
            </motion.div>

            {connectivity.points && (
              <motion.div variants={fadeUp} className="mt-8 space-y-3">
                {connectivity.points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                    <MapPin className="h-5 w-5 text-amber-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  )
}