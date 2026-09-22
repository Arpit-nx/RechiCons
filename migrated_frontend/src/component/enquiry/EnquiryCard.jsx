import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { cardVariants, fieldVariants } from '../../animations/enquiryVariants'

const INITIAL_FORM_DATA = {
  fullName: '',
  email: '',
  phone: '',
  project: '',
  subject: '',
  message: '',
}

function validate(data) {
  const errors = {}

  if (!data.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (!/^[0-9+\-\s()]{7,}$/.test(data.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!data.project.trim()) errors.project = 'Please enter a project name.'
  if (!data.subject.trim()) errors.subject = 'Please enter a subject.'
  if (data.message.trim().length < 10) errors.message = 'Please share a few more details.'

  return errors
}

export const EnquiryCard = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    try {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setIsSubmitted(true)
      setFormData(INITIAL_FORM_DATA)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      className="relative w-full max-w-[680px] overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_32px_90px_rgba(79,43,18,0.18)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_40px_100px_rgba(79,43,18,0.22)] sm:p-12"
    >
      <motion.div variants={fieldVariants} className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Send us a Message
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          Our team will get back to you shortly.
        </p>
      </motion.div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-8 text-center shadow-inner backdrop-blur-md"
        >
          <p className="font-display text-2xl font-bold text-amber-900">Thank you.</p>
          <p className="mt-2 text-sm text-slate-600">Your enquiry has been received. We will be in touch soon.</p>
        </motion.div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-7">
          <motion.div variants={fieldVariants} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="John Doe"
              autoComplete="name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john@example.com"
              autoComplete="email"
            />
          </motion.div>

          <motion.div variants={fieldVariants} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
            <Input
              label="Project Name"
              name="project"
              value={formData.project}
              onChange={handleChange}
              error={errors.project}
              placeholder="e.g. Santi Bhawan, Anandi Villa..."
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="I would like to know more about..."
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <TextArea
              label="Message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell us a little more about what you're looking for."
            />
          </motion.div>

          <motion.div variants={fieldVariants} className="mt-2 flex justify-center sm:justify-start">
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full rounded-xl bg-amber-400 px-8 py-4 text-center font-bold text-stone-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:bg-amber-500 hover:shadow-amber-500/50 focus:ring-4 focus:ring-amber-300/60 active:scale-[0.98] sm:w-auto"
            >
              Submit Enquiry
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
}