import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease },
  }),
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-gray-900 overflow-x-hidden">
      {/* Top Header */}
      {/* Top Header */}
      <section className="pt-20 pb-6 sm:pt-28 sm:pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
          >
            <span className="h-px w-8 bg-current" />
            ABOUT US
            <span className="h-px w-8 bg-current" />
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Welcome to Rechi Construction
          </motion.h1>
        </div>
      </section>
      {/* Intro Paragraphs */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            RECHI CONSTRUCTION PVT. LTD. are one of the most experienced and
            reputed real estate developer & Investment Concern, providing
            decent and affordable homes and apartment for different segments of
            the society with first class infrastructure and facilities at a
            very reasonable price and turning the customers dreams into
            reality. One of the Director of company, named by Mr. SAJJAN KUMAR
            MANDAL who has a proven track record in real estate development,
            investment, consultancy and renowned builder, having a successful
            track record of previous project as mentioned here with. We feel
            proud to be Govt. authorized contractor for Civil, Structural and
            Electrical works.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            RECHI CONSTRUCTION PVT. LTD. is strongly committed to achieve
            pollution free excellence in Real Estate for the nation. It has
            developed first class infrastructure to cater the ever growing
            needs & offer first class amenities like Community hall, Multi-gym,
            Landscape, garden, Children's play space, sufficient car parking
            area etc. in the complexes. Thus, RECHI CONSTRUCTION (P) LTD. also
            proposes to give high quality performance and constantly upgrade
            itself with the latest technology and offer facilities as per the
            best standards available in India. RECHI CONSTRUCTION (P) LTD. is a
            company having Corporate Identity No. U45400WB2013PTC198594 -
            2013-2014 incorporated under The Companies Act, 1956 having its
            place of business at 220, (Formerly 213) Dum Dum Park, P.S – Lake
            Town, 24 Parganas (N), Kolkata – 700 055.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-2xl font-medium text-gray-900 sm:text-3xl mb-6"
          >
            Mission & Vision
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-base leading-relaxed text-gray-700 sm:text-lg mb-8"
          >
            Rechi Construction Pvt. Ltd. motive is to provide high quality
            infrastructure and affordable homes and flats to the middle and
            higher income groups in society with luxurious life as well as
            fulfilling our client’s dream into reality.
          </motion.p>

          <div className="space-y-4">
            {[
              "Transparency in all our dealings to enhance customer value and quality",
              "Honesty towards our clients and community through Ethical and professional service",
              "Performance to meet expectations of our stakeholders",
              "Discipline to be punctual each time and every time",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-2xl font-medium text-gray-900 sm:text-3xl mb-6"
          >
            Core Values
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            Our core values represent the key principles upheld by each member
            of the entire organization. The values have been inculcated in our
            day-to-day business policies, our approach towards our clients and
            the way we work and co-ordinate with our fellow employees. Our Core
            Values is considered to be a guidebook for our employees and helps
            maintain the standards set by the company in the conduction of its
            daily operations. With the view to massive construction activity and
            prompt support of our clients demand we have a unit also name It
            RECHI NIRMAAN PVT. LTD.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex justify-center">
          <motion.a
            href="/projects"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-md border border-amber-500 bg-amber-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-amber-400 hover:border-amber-400 active:bg-amber-600 shadow-sm"
          >
            OUR PROJECTS
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>
    </div>
  )
}