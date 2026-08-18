import React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                            ANIMATION VARIANTS                              */
/* -------------------------------------------------------------------------- */

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease },
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
/*                              HELPER COMPONENTS                             */
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
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ContactUs() {
  const googleMapUrl =
    "https://www.google.com/maps/place/RECHI+CONSTRUCTION+PVT.+LTD./@22.61114,88.409087,16z/data=!4m6!3m5!1s0x3a0275f8631201d9:0xd020a079d47427e3!8m2!3d22.61114!4d88.4090872!16s%2Fg%2F11c2q0msn3?hl=en&entry=ttu"

  const mapEmbedIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.473539129532!2d88.4090872!3d22.61114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f8631201d9%3A0xd020a079d47427e3!2sRECHI%20CONSTRUCTION%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"

  const contactCards = [
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "220 (formerly 213), Dum Dum Park",
        "Near Boys High School, Kolkata 700055",
      ],
      linkText: "View on Google Maps",
      linkUrl: googleMapUrl,
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 90518 00151", "+91 79802 94424"],
      linkText: "Call Us Now",
      linkUrl: "tel:+919051800151",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["rechiconstruction@yahoo.in", "info@rechiconstruction.in"],
      linkText: "Send Mail",
      linkUrl: "mailto:rechiconstruction@yahoo.in",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday – Saturday: 10:00 AM – 7:30 PM",
        "Sunday: By Appointment",
      ],
      linkText: null,
      linkUrl: null,
    },
  ]

  return (
    <div className="contact-shell w-full min-h-screen bg-[#fbf8f3] text-gray-900 overflow-x-hidden pt-20 pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#fbf8f3] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-200/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(211,173,100,0.18),transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Have a question about our projects, interior solutions, or property services? Connect with our team today and let's bring your dream home to life."
            align="center"
          />
        </div>
      </section>

      {/* 2. CONTACT DETAILS & MAP SECTION */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-semibold text-gray-900 mb-6"
              >
                Reach Out Directly
              </motion.h3>

              {contactCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>

                      <div className="flex-1">
                        <h4 className="font-display text-lg font-medium text-gray-900">
                          {card.title}
                        </h4>

                        <div className="mt-2 space-y-1 text-sm text-gray-600 leading-relaxed">
                          {card.details.map((detail, idx) => (
                            <p key={idx}>{detail}</p>
                          ))}
                        </div>

                        {card.linkUrl && (
                          <a
                            href={card.linkUrl}
                            target={card.linkUrl.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {card.linkText}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Column: Google Map */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className="relative h-full min-h-[480px] rounded-3xl border border-white/80 bg-white p-3 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="font-display text-base font-semibold text-gray-900">
                      Locate Us
                    </span>
                  </div>

                  <a
                    href={googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-100 transition-colors"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="relative w-full flex-1 min-h-[420px] rounded-2xl overflow-hidden mt-2">
                  <iframe
                    title="RECHI CONSTRUCTION Location"
                    src={mapEmbedIframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}