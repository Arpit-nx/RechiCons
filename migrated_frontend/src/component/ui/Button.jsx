import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const Button = forwardRef(({ children, isLoading = false, className = '', disabled, ...rest }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      disabled={disabled || isLoading}
      className={[
        'group relative inline-flex items-center justify-center overflow-hidden',
        'bg-primary px-10 py-4 text-sm font-medium uppercase tracking-widest text-ivory',
        'transition-colors duration-300 ease-in-out',
        'disabled:cursor-not-allowed disabled:opacity-60',
        className,
      ].join(' ')}
      {...rest}
    >
      <span className="relative z-10">{isLoading ? 'Sending…' : children}</span>

      <span
        aria-hidden
        className={[
          'absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent',
          'scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100',
        ].join(' ')}
      />
    </motion.button>
  )
})

Button.displayName = 'Button'
