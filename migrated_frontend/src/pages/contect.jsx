import React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                              ANIMATION VARIANTS                            */
/* -------------------------------------------------------------------------- */

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease,
    },
  }),
}

const headingContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const headingItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

/* -------------------------------------------------------------------------- */
/*                              HELPER COMPONENT                              */
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

  const heading =
    tone === "dark" ? "text-amber-50" : "text-gray-900"

  const body =
    tone === "dark" ? "text-amber-100/75" : "text-gray-600"

  const eyebrowColor =
    tone === "dark" ? "text-amber-400" : "text-amber-600"

  return (
    <motion.div
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className={`w-full max-w-3xl ${
        isCenter ? "mx-auto text-center" : ""
      } ${className}`}
    >
      <motion.span
        variants={headingItem}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowColor} ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
        {/* Always show right line when centered for proper alignment */}
        <span className={`h-px w-8 bg-current ${isCenter ? "" : "md:hidden"}`} />
      </motion.span>

      <motion.h2
        variants={headingItem}
        className={`mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl ${heading}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={headingItem}
          className={`mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg ${body}`}
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
      details: [
        "+91 90518 00151",
        "+91 79802 94424",
      ],
      linkText: "Call Us Now",
      linkUrl: "tel:+919051800151",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "rechiconstruction@yahoo.in",
        "info@rechiconstruction.in",
      ],
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
    <div className="contact-shell min-h-screen w-full overflow-x-hidden bg-[#fbf8f3] pb-12 pt-10 text-gray-900 sm:pb-16 sm:pt-12 lg:pb-20">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-200/60 bg-[#fbf8f3] px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:pb-16 lg:px-8 lg:pb-20 lg:pt-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(211,173,100,0.18),transparent)]"
        />

        <div className="relative mx-auto flex w-full max-w-7xl justify-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Have a question about our projects, interior solutions, or property services? Connect with our team today and let's bring your dream home to life."
            align="center"
          />
        </div>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="relative px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">

            {/* LEFT - CONTACT CARDS */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="mb-6 sm:mb-8"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Contact Information
                </p>

                <h3 className="font-display text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
                  Reach Out Directly
                </h3>
              </motion.div>

              <div className="space-y-4 sm:space-y-5">
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
                      className="group w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 md:p-6"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-white sm:h-12 sm:w-12">
                          <Icon
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            strokeWidth={1.75}
                          />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-base font-semibold text-gray-900 sm:text-lg">
                            {card.title}
                          </h4>

                          <div className="mt-1.5 space-y-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm">
                            {card.details.map((detail, idx) => (
                              <p key={idx} className="break-words">
                                {detail}
                              </p>
                            ))}
                          </div>

                          {card.linkUrl && (
                            <a
                              href={card.linkUrl}
                              target={
                                card.linkUrl.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              rel="noopener noreferrer"
                              className="mt-2.5 inline-flex max-w-full items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 transition-colors hover:text-amber-700 sm:mt-3 sm:text-xs"
                            >
                              <span className="truncate">
                                {card.linkText}
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT - GOOGLE MAP */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className="h-full w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl sm:rounded-3xl sm:p-3"
              >
                <div className="relative h-[340px] w-full overflow-hidden rounded-xl sm:h-[420px] sm:rounded-2xl md:h-[470px] lg:h-full lg:min-h-[520px]">
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