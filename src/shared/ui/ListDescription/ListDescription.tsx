import { cn } from '@shared/libs/cn'
import { Separator } from '@shared/ui/base/separator'

import { Fragment, ReactNode } from 'react'

export interface ListDescriptionItem {
  key?: string | number
  title: ReactNode
  description: ReactNode
  disabled?: boolean
  icon?: ReactNode
  onClick?: () => void
}

export interface ListDescriptionProps {
  list: ListDescriptionItem[]
  className?: string
  itemClassName?: string
  rightIcon?: ReactNode
}

const ListDescription = ({
  list,
  className,
  itemClassName,
  rightIcon,
}: ListDescriptionProps) => {
  return (
    <div className={cn('flex w-full flex-col', className)}>
      {list.map((item, index) => {
        const icon = item.icon ?? rightIcon
        const isClickable = Boolean(item.onClick)
        const itemKey = item.key ?? index
        const content = (
          <>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="font-primary text-label-medium font-normal text-foreground-secondary">
                {item.title}
              </div>
              <div
                className="font-primary text-body-xlarge font-normal tracking-[-0.2px] text-foreground-primary"
                style={{
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontVariantNumeric: 'lining-nums tabular-nums',
                }}
              >
                {item.description}
              </div>
            </div>
            {icon && (
              <div className="flex shrink-0 items-center justify-center text-foreground-secondary">
                {icon}
              </div>
            )}
          </>
        )

        if (isClickable) {
          return (
            <Fragment key={itemKey}>
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={cn(
                  'flex w-full items-center gap-3 py-3 text-left transition-colors enabled:hover:bg-muted disabled:opacity-50',
                  itemClassName,
                )}
              >
                {content}
              </button>
              {index < list.length - 1 && <Separator />}
            </Fragment>
          )
        }

        return (
          <Fragment key={itemKey}>
            <div
              className={cn(
                'flex w-full items-center gap-3 py-3',
                itemClassName,
              )}
            >
              {content}
            </div>
            {index < list.length - 1 && <Separator />}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ListDescription
