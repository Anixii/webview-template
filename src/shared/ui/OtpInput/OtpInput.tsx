import { cn } from '@shared/libs/cn'
import {
  OTPInput,
  type OTPInputProps,
  REGEXP_ONLY_DIGITS,
  type SlotProps,
} from 'input-otp'

import './OtpInput.css'

export type OTPProps = Omit<
  OTPInputProps,
  | 'children'
  | 'containerClassName'
  | 'maxLength'
  | 'noScriptCSSFallback'
  | 'pattern'
  | 'render'
> & {
  containerClassName?: string
  length?: number
  type?: string
}

const defaultOtpLength = 6

const sanitizeOtpValue = (value: string) => value.replace(/\D/g, '')

function OtpSlot({ char, hasFakeCaret, isActive }: SlotProps) {
  return (
    <div
      className={cn('my-otp__slot', isActive && 'my-otp__slot--active')}
      aria-hidden="true"
    >
      {char ? (
        <span className="my-otp__char">{char}</span>
      ) : (
        <span className="my-otp__placeholder">-</span>
      )}
      {hasFakeCaret && <span className="my-otp__caret" />}
    </div>
  )
}

export function OtpInput({
  className,
  containerClassName,
  disabled,
  inputMode = 'tel',
  length = defaultOtpLength,
  pasteTransformer,
  ...props
}: OTPProps) {
  const handlePaste: OTPInputProps['pasteTransformer'] = (pasted) => {
    const transformedValue = pasteTransformer
      ? pasteTransformer(pasted)
      : pasted

    return sanitizeOtpValue(transformedValue)
  }

  return (
    <OTPInput
      {...props}
      className={cn('my-otp__input', className)}
      containerClassName={cn(
        'my-otp',
        disabled && 'my-otp--disabled',
        containerClassName,
      )}
      disabled={disabled}
      inputMode={inputMode}
      maxLength={length}
      noScriptCSSFallback={null}
      pasteTransformer={handlePaste}
      pattern={REGEXP_ONLY_DIGITS}
      pushPasswordManagerStrategy="none"
      render={({ slots }) => (
        <div className="my-otp__slots">
          {slots.map((slot, index) => (
            <OtpSlot
              key={index}
              {...slot}
            />
          ))}
        </div>
      )}
      type="text"
    />
  )
}
