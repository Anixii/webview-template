import { Icon } from '@shared/iconpack'
import { cn } from '@shared/libs/cn'

import { ReactNode } from 'react'

export interface WarningInfoProps {
  title?: ReactNode
  className?: string
  description?: ReactNode
  iconColor?: string
  descriptionCls?: string
}

export function WarningInfo({
  title,
  className,
  description,
  descriptionCls,
  iconColor = 'var(--color-text-secondary)',
}: WarningInfoProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 rounded-2xl bg-body-tertiary-secondary p-3',
        className,
      )}
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        <Icon
          aria-hidden
          name="warning"
          size={24}
          className="shrink-0"
          color={iconColor}
        />
      </div>
      <div className="min-w-0">
        {title && (
          <div className="leading-primary font-semibold text-text-primary">
            {title}
          </div>
        )}
        {description && (
          <div
            className={cn(
              'leading-secondary font-medium text-text-secondary',
              title && 'mt-1',
              descriptionCls,
            )}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  )
}
