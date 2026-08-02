import { forwardRef, useId } from 'react'
import { motion } from 'framer-motion'

export const Input = forwardRef(({ label, error, className = '', id, ...rest }, ref) => {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <motion.input
        id={inputId}
        ref={ref}
        whileFocus={{ scale: 1.005 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          'w-full border-b bg-transparent px-0 py-3 text-[15px] text-neutral-800 outline-none',
          'placeholder:text-slate-400 transition-colors duration-300 ease-in-out',
          error ? 'border-primary' : 'border-beige focus:border-primary',
          'focus:shadow-input',
          className,
        ].join(' ')}
        {...rest}
      />

      {error && (
        <motion.span
          id={`${inputId}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-primary"
        >
          {error}
        </motion.span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
