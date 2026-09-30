import { cn } from '@shared/libs/cn'

import { TextareaHTMLAttributes, forwardRef } from 'react'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean
  floatingLabel?: boolean
  status?: 'error'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, floatingLabel, status, ...props }, ref) => {
    const isError = error || status === 'error'

    return (
      <textarea
        aria-invalid={isError || undefined}
        className={cn(
          'min-h-[120px] w-full resize-y rounded-[20px] border border-transparent bg-background-surface px-4 py-4 text-base text-text-primary transition-colors outline-none placeholder:text-text-muted focus:border-brand disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus:border-destructive data-[floating-label=true]:pt-8 data-[floating-label=true]:pb-3',
          className,
        )}
        data-floating-label={floatingLabel || undefined}
        ref={ref}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
