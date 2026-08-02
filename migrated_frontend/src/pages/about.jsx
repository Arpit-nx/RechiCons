import { animate, motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Clock4,
  Compass,
  Eye,
  Flag,
  Gem,
  Hammer,
  HardHat,
  Layers,
  PencilRuler,
  Phone,
  ShieldCheck,
  Smile,
  Users,
  Wrench,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { about, company, contact, strengths } from '../data/site'
import { img } from '../lib/images'

const ease = [0.16, 1, 0.3, 1]

const completedCount = projects.filter((p) => p.category === 'completed').length
const ongoingCount = projects.filter((p) => p.category === 'ongoing').length
const upcomingCount = projects.filter((p) => p.category === 'upcoming').length
const yearsActive = new Date().getFullYear() - Number(company.founded)

/* ---------------------------------- decor --------------------------------- */

function FloatingShapes({ variant = 'dark' }) {
  const ring = variant === 'dark' ? 'border-gold-400/25' : 'border-gold-600/20'
  const glow = variant === 'dark' ? 'bg-gold-400/10' : 'bg-gold-500/10'
  const dot = variant === 'dark' ? 'bg-gold-300/50' : 'bg-gold-600/40'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute -top-24 -right-16 h-72 w-72 rounded-full border ${ring} animate-spin-slow`} />
      <div className={`absolute top-1/3 -left-24 h-64 w-64 rounded-full ${glow} blur-3xl animate-float-slower`} />
      <div className={`absolute bottom-10 right-[18%] h-24 w-24 rotate-45 border ${ring} animate-float-slow`} />
      <div className={`absolute top-20 left-[22%] h-2.5 w-2.5 rounded-full ${dot} animate-float-slow`} />
      <div className={`absolute bottom-1/4 left-[10%] h-16 w-16 rounded-full border ${ring} animate-float-slower`} />
    </div>
  )
}

/* -------------------------------- headings -------------------------------- */

const headingContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const headingItem = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light', className = '' }) {
  const isCenter = align === 'center'
  const heading = tone === 'dark' ? 'text-sand-50' : 'text-ink-950'
  const body = tone === 'dark' ? 'text-sand-200/75' : 'text-ink-600'
  const eyebrowColor = tone === 'dark' ? 'text-gold-300' : 'text-gold-600'

  return (
    <motion.div
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
    >
      <motion.span
        variants={headingItem}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowColor} ${isCenter ? 'justify-center' : ''}`}
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
        <motion.p variants={headingItem} className={`mt-5 text-base leading-relaxed sm:text-lg ${body}`}>
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

/* -------------------------------- counters -------------------------------- */

function StatCounter({ value, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

/* ---------------------------------- hero ----------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.12, ease } }),
}

function WelcomeHero() {
  const aboutImg = img('site/about.jpg')

  return (
    <section className="relative overflow-hidden bg-ink-950 pb-32 pt-28 sm:pb-40 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(211,173,100,0.18),transparent),radial-gradient(ellipse_60%_50%_at_100%_10%,rgba(211,173,100,0.10),transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,11,13,0.9))]" />
      <FloatingShapes variant="dark" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300"
          >
            Est. {company.founded} &middot; Kolkata, India
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-balance mt-6 font-display text-4xl font-medium leading-[1.08] text-sand-50 sm:text-5xl lg:text-6xl"
          >
            Welcome to Rechi Construction
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-sand-200/75 sm:text-lg"
          >
            {about.intro}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-xl text-sm leading-relaxed text-sand-200/60"
          >
            {about.extended}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href={`mailto:${contact.emailPrimary}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_10px_30px_-8px_rgba(211,173,100,0.6)]"
            >
              Enquire About a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-2 text-sm text-sand-200/70">
              <ShieldCheck className="h-4 w-4 text-gold-400" strokeWidth={1.75} />
              Govt.-Authorised Contractor
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={aboutImg}
              alt="A Rechi Construction residential development in Kolkata"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="absolute -bottom-8 -left-6 w-64 rounded-2xl border border-white/10 bg-ink-900/80 p-5 shadow-2xl backdrop-blur-xl sm:-left-10"
          >
            <p className="font-display text-lg italic leading-snug text-sand-50">&ldquo;{company.tagline}&rdquo;</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-gold-300/80">
              &mdash; {company.director}, Director
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------------------- stats band ------------------------------- */

const stats = [
  { icon: CalendarCheck, value: yearsActive, suffix: '+', label: 'Years of Trust', sub: `Since ${company.founded}` },
  { icon: Building2, value: completedCount, suffix: '', label: 'Completed Developments', sub: 'Delivered across Kolkata' },
  { icon: HardHat, value: ongoingCount + upcomingCount, suffix: '', label: 'In the Pipeline', sub: 'Ongoing & upcoming' },
  { icon: Wrench, value: services.length, suffix: '', label: 'End-to-End Services', sub: 'From land to handover' },
]

function StatsBand() {
  return (
    <div className="relative z-20 mx-auto -mt-20 w-full max-w-6xl px-4 sm:-mt-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand-200 bg-sand-200/60 shadow-[0_30px_60px_-25px_rgba(10,11,13,0.35)] sm:grid-cols-4"
      >
        {stats.map(({ icon: Icon, value, suffix, label, sub }) => (
          <div
            key={label}
            className="group relative flex flex-col gap-3 bg-sand-50/95 p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white sm:p-7"
          >
            <Icon
              className="h-5 w-5 text-gold-600 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110"
              strokeWidth={1.75}
            />
            <div className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
              <StatCounter value={value} suffix={suffix} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-800">{label}</p>
              <p className="text-xs text-ink-600/70">{sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ------------------------- mission / vision / values ------------------------ */

const pillars = [
  { index: '01', icon: Flag, title: 'Mission', text: about.mission },
  { index: '02', icon: Eye, title: 'Vision', text: about.vision.join(' ') },
  { index: '03', icon: Gem, title: 'Core Values', text: about.coreValues },
]

const pillarVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.75, delay: i * 0.12, ease } }),
}

function MissionVisionValues() {
  return (
    <section className="relative bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Foundation"
          title="What we stand for"
          description="The mission, vision and values that guide every Rechi development, from the first drawing to the final handover."
          align="center"
          tone="light"
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/3 hidden w-px bg-gradient-to-b from-transparent via-sand-300 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-2/3 hidden w-px bg-gradient-to-b from-transparent via-sand-300 to-transparent lg:block"
          />

          {pillars.map(({ index, icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              custom={i}
              variants={pillarVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="group px-4 lg:px-10"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-gold-600/70">{index}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium text-ink-950 sm:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- strengths -------------------------------- */

const strengthIcons = [Users, Layers, BadgeCheck, Clock4, PencilRuler, Smile]

function StrengthsGrid() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <FloatingShapes variant="dark" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Rechi"
          title="Strengths built over a decade of delivery"
          description="Every address we hand over carries the same standard of engineering, material and care — regardless of scale."
          align="center"
          tone="dark"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => {
            const Icon = strengthIcons[i % strengthIcons.length]
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/40 hover:bg-white/[0.06]"
              >
                <Icon
                  className="h-6 w-6 text-gold-400 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-lg font-medium text-sand-50">{strength.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-200/65">{strength.description}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------- timeline --------------------------------- */

const milestones = [
  {
    icon: Flag,
    tag: company.founded,
    title: 'Foundation',
    description: `Incorporated as ${company.name} and established as a Government-authorised contractor for Civil, Structural & Electrical works.`,
  },
  {
    icon: Building2,
    tag: `${completedCount} Delivered`,
    title: 'The Anandi Collection',
    description: `${completedCount} completed developments handed over across Bablatala, Rajarhat and Dum Dum Park, each built to the same first-class standard.`,
  },
  {
    icon: Hammer,
    tag: `${ongoingCount} Active Sites`,
    title: 'Building Today',
    description: `${ongoingCount} developments currently under construction, engineered with the same discipline that defines every Rechi address.`,
  },
  {
    icon: Compass,
    tag: `${upcomingCount} Planned`,
    title: 'Looking Ahead',
    description: `${upcomingCount} upcoming developments in planning, extending the Anandi standard deeper into Kolkata's growing eastern corridor.`,
  },
]

function Timeline() {
  return (
    <section className="relative bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Journey"
          title="From one address to a growing portfolio"
          align="center"
          tone="light"
          className="mx-auto"
        />

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sand-300 to-transparent lg:block"
          />

          <div className="space-y-10 lg:space-y-0">
            {milestones.map((m, i) => {
              const Icon = m.icon
              const fromLeft = i % 2 === 0
              return (
                <div key={m.title} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold-500 bg-sand-50 lg:block"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.85, ease }}
                    className={fromLeft ? 'lg:col-start-1 lg:pr-8 lg:text-right' : 'lg:col-start-2 lg:pl-8'}
                  >
                    <div
                      className={`group rounded-2xl border border-sand-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${fromLeft ? 'lg:ml-auto' : ''}`}
                    >
                      <div className={`flex items-center gap-3 ${fromLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">{m.tag}</span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-medium text-ink-950">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- closing CTA -------------------------------- */

function ClosingCTA() {
  const bgImg = img('projects/anandi-enclave/hero.jpg')

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <img src={bgImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/95 to-ink-950/80" />
      <FloatingShapes variant="dark" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300"
        >
          {company.affiliate} &middot; Group Company
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="text-balance mt-5 font-display text-3xl font-medium leading-tight text-sand-50 sm:text-4xl lg:text-5xl"
        >
          Let&rsquo;s build your next address, honestly.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand-200/70 sm:text-base"
        >
          CIN {company.cin} &middot; {contact.addressShort}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${contact.emailPrimary}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_10px_30px_-8px_rgba(211,173,100,0.6)]"
          >
            Enquire Now
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {contact.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ----------------------------------- page ------------------------------------ */

export default function About() {
  return (
    <section id="about" aria-label="About Rechi Construction" className="relative bg-sand-50">
      <WelcomeHero />
      <StatsBand />
      <MissionVisionValues />
      <StrengthsGrid />
      <Timeline />
      <ClosingCTA />
    </section>
  )
}
