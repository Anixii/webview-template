import { cn } from '@shared/libs/cn'

interface Tab {
  key: string | number | null
  label: string
}

interface ScrollableTabsProps {
  tabs: Tab[]
  activeTab: string | number | null
  onTabChange: (tabKey: string | number | null) => void
  className?: string
  btnClassName?: string
}

const ScrollableTabs = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  btnClassName,
}: ScrollableTabsProps) => {
  return (
    <div className={cn('relative -mr-4', className)}>
      <div className="scrollbar-hide relative overflow-x-auto py-2">
        <div className="flex w-max gap-2 pr-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={cn(
                'rounded-xl bg-body-tertiary-secondary px-3 py-2 text-sm whitespace-nowrap text-text-primary transition-all duration-300',
                {
                  'bg-brand text-white': activeTab === tab.key,
                },
                btnClassName,
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-background-dark)] via-[var(--color-background-dark)]" />
    </div>
  )
}

export default ScrollableTabs
