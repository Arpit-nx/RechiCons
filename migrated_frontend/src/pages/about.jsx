import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        
        {/* Top Header */}
        <section className="pb-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-lg sm:text-xl font-semibold text-amber-600 mb-2"
          >
            About Us
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Welcome to Rechi Construction
          </motion.h1>
        </section>

        {/* Intro Paragraphs */}
        <section className="pb-10 space-y-6">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-base leading-relaxed text-gray-800 sm:text-lg"
          >
            <strong className="font-bold text-gray-900">RECHI CONSTRUCTION PVT. LTD.</strong> are one of the most experienced and reputed real estate developer & Investment Concern, providing decent and affordable homes and apartment for different segments of the society with first class infrastructure and facilities at a very reasonable price and turning the customers dreams into reality. One of the Director of company, named by Mr. SAJJAN KUMAR MANDAL who has a proven track record in real estate development, investment, consultancy and renowned builder, having a successful track record of previous project as mentioned here with. <span className="font-bold underline underline-offset-2">We feel proud to be Govt. authorized contractor for Civil, Structural and Electrical works.</span>
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-base leading-relaxed text-gray-800 sm:text-lg"
          >
            <strong className="font-bold text-gray-900">RECHI CONSTRUCTION PVT. LTD.</strong> is strongly committed to achieve pollution free excellence in Real Estate for the nation. It has developed first class infrastructure to cater the ever growing needs & offer first class amenities like Community hall, Multi-gym, Landscape, garden, Children's play space, sufficient car parking area etc. in the complexes. Thus, RECHI CONSTRUCTION (P) LTD. also proposes to give high quality performance and constantly upgrade itself with the latest technology and offer facilities as per the best standards available in India. RECHI CONSTRUCTION (P) LTD. is a company having Corporate Identity No. U45400WB2013PTC198594 - 2013-2014 incorporated under The Companies Act, 1956 having its place of business at 220, (Formerly 213) Dum Dum Park, P.S – Lake Town, 24 Parganas (N), Kolkata – 700 055.
          </motion.p>
        </section>

        {/* Mission & Vision / Core Values 2-Column Grid */}
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Mission & Vision Column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
                Mission & Vision
              </h2>

              <p className="text-base leading-relaxed text-gray-800 sm:text-lg mb-6">
                <strong className="font-bold text-gray-900">Rechi Construction Pvt. Ltd.</strong> motive is to provide high quality infrastructure and affordable homes and flats to the middle and higher income groups in society with luxurious life as well as fulfilling our client’s dream into reality.
              </p>

              <div className="space-y-4 text-base leading-relaxed text-gray-800 sm:text-lg">
                <p>Transparency in all our dealings to enhance customer value and quality</p>
                <p>Honesty towards our clients and community through Ethical and professional service</p>
                <p>Performance to meet expectations of our stakeholders</p>
                <p>Discipline to be punctual each time and every time</p>
              </div>
            </motion.div>

            {/* Core Values Column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
                Core Values
              </h2>

              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">
                Our core values represent the key principles upheld by each member of the entire organization. The values have been inculcated in our day-to-day business policies, our approach towards our clients and the way we work and co-ordinate with our fellow employees. Our Core Values is considered to be a guidebook for our employees and helps maintain the standards set by the company in the conduction of its daily operations. With the view to massive construction activity and prompt support of our clients demand we have a unit also name It <span className="font-bold underline underline-offset-2">RECHI NIRMAAN PVT. LTD.</span>
              </p>
            </motion.div>

          </div>
        </section>

        {/* Bottom Paragraph */}
        <section className="pt-6 pb-10">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base leading-relaxed text-gray-800 sm:text-lg"
          >
            Our core values represent the key principles upheld by each member of the entire organization. The values have been inculcated in our day-to-day business policies, our approach towards our clients and the way we work and co-ordinate with our fellow employees. Our Core Values is considered to be a guidebook for our employees and helps maintain the standards set by the company in the conduction of its daily operations. With the view to massive construction activity and prompt support of our clients demand we have a unit also name It <span className="font-bold underline underline-offset-2">RECHI NIRMAAN PVT. LTD.</span>
          </motion.p>
        </section>

        {/* CTA Button */}
        <section className="pt-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors shadow-sm"
            >
              OUR PROJECTS
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

