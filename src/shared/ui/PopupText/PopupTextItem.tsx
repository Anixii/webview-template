import { Icon } from '@shared/iconpack'

import { PopupTextOption } from './PopupText'

interface PopupTextItemProps {
  isSelected?: boolean
  item: PopupTextOption
  onChange: (value: string | number) => void
}

export function PopupTextItem({
  isSelected,
  item,
  onChange,
}: PopupTextItemProps) {
  return (
    <button
      aria-selected={isSelected}
      className="flex items-center justify-between border-body-tertiary py-3 text-left text-base font-medium text-text-primary not-last:border-b"
      id={`popup-text-option-${item.value}`}
      onClick={() => onChange(item.value)}
      role="option"
      tabIndex={-1}
      type="button"
    >
      {item.label}
      {isSelected && (
        <Icon
          color="var(--color-brand)"
          name="completed"
          size={20}
        />
      )}
    </button>
  )
}
