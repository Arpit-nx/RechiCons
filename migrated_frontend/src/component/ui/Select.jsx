import { forwardRef, useId } from 'react'
import { motion } from 'framer-motion'

export const Select = forwardRef(
  ({ label, options, placeholder = 'Select a project', error, className = '', id, defaultValue, ...rest }, ref) => {
    const generatedId = useId()
    const selectId = id ?? generatedId

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={selectId} className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </label>

        <div className="relative">
          <motion.select
            id={selectId}
            ref={ref}
            defaultValue={defaultValue ?? ''}
            whileFocus={{ scale: 1.005 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={[
              'w-full appearance-none border-b bg-transparent px-0 py-3 pr-6 text-[15px] text-neutral-800 outline-none',
              'transition-colors duration-300 ease-in-out',
              error ? 'border-primary' : 'border-beige focus:border-primary',
              'focus:shadow-input',
              className,
            ].join(' ')}
            {...rest}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>

          <svg
            aria-hidden
            viewBox="0 0 12 8"
            className="pointer-events-none absolute right-0 top-1/2 h-2 w-3 -translate-y-1/2 text-primary"
          >
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {error && (
          <motion.span
            id={`${selectId}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-primary"
          >
            {error}
          </motion.span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
