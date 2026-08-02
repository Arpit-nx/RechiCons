import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { cardVariants, fieldVariants } from '../../animations/enquiryVariants'

const PROJECT_OPTIONS = [
  { value: 'anandi-enclave', label: 'Anandi Enclave' },
  { value: 'anandi-heights', label: 'Anandi Heights' },
  { value: 'anandi-park', label: 'Anandi Park' },
  { value: 'general', label: 'General Enquiry' },
]

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
  if (!data.project) errors.project = 'Please select a project.'
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
      className="w-full max-w-[650px] rounded-2xl border border-beige bg-white p-8 shadow-card sm:p-12"
    >
      <motion.div variants={fieldVariants} className="mb-10 text-center">
        <h1 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Let&apos;s Build Something Together
        </h1>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">Our team will get back to you shortly.</p>
      </motion.div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="rounded-xl border border-beige bg-ivory/60 p-8 text-center"
        >
          <p className="font-display text-xl text-primary">Thank you.</p>
          <p className="mt-2 text-sm text-slate-500">Your enquiry has been received. We will be in touch soon.</p>
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
            <Select
              label="Project"
              name="project"
              options={PROJECT_OPTIONS}
              value={formData.project}
              onChange={handleChange}
              error={errors.project}
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
            <Button type="submit" isLoading={isSubmitting}>
              Submit Enquiry
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
}
