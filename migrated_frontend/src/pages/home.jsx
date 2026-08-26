
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  CalendarDays,
  Eye,
  Flag,
  Gem,
  MessageCircle,
  Plus,
  Share2,
  ShieldCheck,
  X,
  Users,
  Package,
  Award,
  Clock,
  Building2,
  HeartHandshake,
} from "lucide-react"

// --- Image & Data Imports ---
import rechiLogo from "../assets/rechi_logo.png"
import project1 from "../assets/project-imgs/rechi1.jpeg"
import project2 from "../assets/project-imgs/rechi2.jpg"
import project3 from "../assets/project-imgs/rechi3.jpeg"

import { about } from "./data/site"
import { img } from "./lib/images"

const ease = [0.16, 1, 0.3, 1]

/* -------------------------------------------------------------------------- */
/*                            ANIMATION VARIANTS                              */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease },
  }),
}

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const headingItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

/* -------------------------------------------------------------------------- */
/*                             HELPER COMPONENTS                              */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}) {
  const isCenter = align === "center"
  const heading = tone === "dark" ? "text-amber-50" : "text-gray-900"
  const body = tone === "dark" ? "text-amber-100/75" : "text-gray-600"
  const eyebrowColor = tone === "dark" ? "text-amber-400" : "text-amber-600"

  return (
    <motion.div
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      <motion.span
        variants={headingItem}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowColor} ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={headingItem}
        className={`text-balance mt-4 font-display text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl ${heading}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={headingItem}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${body}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Home({ onSplashEnd }) {
  const [showSplash, setShowSplash] = useState(true)
  const [splashLeaving, setSplashLeaving] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const slides = [project1, project2, project3]
  const aboutImg = img("site/about.jpg")

  /* --- Hide Scrollbar while Splash is visible (safe version) --- */
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden"
    } else {
      // only clear if sidebar is not open
      if (!document.body.classList.contains("sidebar-open")) {
        document.body.style.overflow = ""
      }
    }

    return () => {
      if (!document.body.classList.contains("sidebar-open")) {
        document.body.style.overflow = ""
      }
    }
  }, [showSplash])

  /* --- Splash Screen Control --- */
  useEffect(() => {
    const hideSplashTimer = window.setTimeout(() => {
      setSplashLeaving(true)
      window.setTimeout(() => {
        setShowSplash(false)
        if (onSplashEnd) onSplashEnd()
      }, 650)
    }, 2200)

    return () => window.clearTimeout(hideSplashTimer)
  }, [onSplashEnd])

  /* --- Slider Control --- */
  useEffect(() => {
    if (showSplash) return
    const sliderTimer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(sliderTimer)
  }, [showSplash, slides.length])

  /* --- Share Handler --- */
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Rechi Construction",
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
    } catch (error) {
      console.log("Share cancelled")
    }
  }

  const pillars = [
    {
      index: "01",
      icon: Flag,
      title: "Mission",
      text: "RECHI CONSTRUCTION (P) LTD.’s motive is to provide high quality infrastructure and affordable homes and flats to the middle and higher income groups in society with luxurious life as well as fulfilling our client’s dream into reality.",
    },
    {
      index: "02",
      icon: Eye,
      title: "Vision",
      text: "Transparency in all our dealings to enhance customer value and quality. Honesty towards our clients and community through Ethical and professional service. Performance to meet expectations of our stakeholders.",
    },
    {
      index: "03",
      icon: Gem,
      title: "Core Values",
      text: "Our core values represent the key principles upheld by each member of the entire organization. The values have been inculcated in our day-to-day business policies, our approach towards our clients and the way we work and co-ordinate with our fellow employees.",
    },
  ]

  const strengths = [
    {
      icon: Users,
      title: "Efficient Team",
      text: "Our team comprises of highly experienced and diligent professionals, who work round the clock to fulfill the desired needs of the clients.",
    },
    {
      icon: Package,
      title: "Finest Materials",
      text: "To us, quality is something of high importance. Thus we abide by the set industry norms and guidelines.",
    },
    {
      icon: Award,
      title: "Quality of Service",
      text: "We make sure to deliver the highest quality service at a reduced cost which ensures economical value to each of our clients.",
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      text: "We are people of our words !! We ensure that you get the flat delivered to you as committed by our service engineers.",
    },
    {
      icon: Building2,
      title: "Architectural Excellence",
      text: "We pursue sustainable design for the built environment through architecture, interior design.",
    },
    {
      icon: HeartHandshake,
      title: "Client Satisfaction",
      text: "Ours is a client-centric organization that strives hard to provide optimum-grade products to the customers.",
    },
  ]

  return (
    <div className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900">
     
      {/* 1. OPENING SPLASH SCREEN */}
      {showSplash && (
        <div
          className={`home-splash ${splashLeaving ? "home-splash--leave" : ""}`}
          aria-hidden="true"
        >
          <div className="home-splash__halo" />
          <div className="home-splash__card">
            {/* Expanded logo dimensions for prominent visual hierarchy */}
            <img
              src={rechiLogo}
              alt="Rechi Construction"
              className="home-splash__logo h-24 sm:h-32 md:h-36 w-auto object-contain mx-auto mb-2"
            />
            <div className="home-splash__brand">
              <span className="home-splash__title" aria-label="Rechi Construction">
                <span className="home-splash__title-part home-splash__title-part--left">Rechi</span>
                <span className="home-splash__title-part home-splash__title-part--right">Construction</span>
              </span>
              <span className="home-splash__subtitle">Building spaces with trust and precision</span>
            </div>
            <div className="home-splash__loader" />
          </div>
        </div>
      )}

      {/* 2. HERO IMAGE SLIDER */}
      <section
        className={`home-hero ${
          showSplash ? "home-hero--hidden" : "home-hero--enter"
        } relative !left-1/2 !w-[100vw] !min-w-[100vw] !max-w-[100vw] !-translate-x-1/2 !m-0 !p-0 bg-[#f7efe3]`}
      >
        <div className="relative !w-full !max-w-none !m-0 !p-0 h-[88vh] min-h-[700px] max-h-[920px] overflow-hidden">
          {slides.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 h-full w-full transition-all duration-[1200ms] ease-in-out ${
                index === currentSlide
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-[1.04] opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Rechi Construction Project ${index + 1}`}
                className="block h-full w-full object-cover object-center"
              />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

          {/* Floating Action Menu */}
          <div
            className="absolute bottom-8 right-[11%] z-40 flex flex-col items-end"
            onMouseLeave={() => setMenuOpen(false)}
          >
            <div
              className={`mb-3 w-[200px] overflow-hidden rounded-xl border border-white/15 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ${
                menuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0 pointer-events-none"
              }`}
            >
              <button
                type="button"
                onClick={handleShare}
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">Share</span>
                <Share2 size={18} strokeWidth={2} className="text-white" />
              </button>

              <a
                href="/contact"
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">
                  Schedule a Visit
                </span>
                <CalendarDays size={18} strokeWidth={2} className="text-white" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">WhatsApp</span>
                <MessageCircle size={18} strokeWidth={2} className="text-white" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              onMouseEnter={() => setMenuOpen(true)}
              className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white text-[#3d4a66] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Gradient ring */}
              <span
                className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 -z-10"
                aria-hidden="true"
              />

              <span
                className={`transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                {menuOpen ? (
                  <X size={24} strokeWidth={2.3} />
                ) : (
                  <Plus size={26} strokeWidth={2.3} />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex h-[58px] w-full items-center justify-center gap-2 bg-[#f7efe3]">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-gray-900"
                  : "w-5 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. WELCOME HERO / ABOUT SECTION */}
      <section className="relative overflow-hidden bg-[#fbf8f3] pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%60%_at_20%-10%,rgba(211,173,100,0.14),transparent),radial-gradient(ellipse_60%_50%_at_100%_10%,rgba(211,173,100,0.08),transparent)]"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <motion.span
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
            >
              About Us
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-balance mt-4 font-display text-4xl font-semibold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Welcome to Rechi Construction
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              Rechi Construction Pvt. Ltd. is a company endeavoring in Real Estate Development and
              Govt. Contractor to provide beautiful and affordable homes for different segment of
              the society with first class infrastructure and facilities at a very reasonable price
              and fulfilling the dream of the customers into reality.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-amber-500 bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-amber-400 hover:border-amber-400 active:bg-amber-600 focus:bg-amber-500 shadow-sm"
              >
                READ MORE
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
              </a>

             
            </motion.div>
          </div>

          {/* RESTORED PICTURE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.12)]">
                <img
                  src={aboutImg}
                  alt="A Rechi Construction residential development"
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.9, ease }}
                className="absolute z-30 -bottom-10 left-4 w-[85%] sm:w-80 rounded-2xl border border-white/60 bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:left-6"
              >
                <p className="font-display text-lg font-semibold leading-snug text-gray-900">
                  “Built with clarity, delivered with trust.”
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
                  — MR. RECHI, DIRECTOR
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION, VISION & CORE VALUES SECTION */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
            {pillars.map(({ index, icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                custom={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease }}
                className="group h-full"
              >
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-amber-600/70">{index}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-gray-900 sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR STRENGTH SECTION - Matching Light Style */}
      <section className="relative py-20 sm:py-28 bg-[#fbf8f3]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Our Strength"
            align="center"
            tone="light"
            className="mx-auto mb-16"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                custom={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.1, ease }}
                className="group h-full"
              >
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-medium text-gray-900 sm:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


