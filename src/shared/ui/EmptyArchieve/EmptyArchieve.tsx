import { Archive } from 'md-glyphs'

interface EmptyArchieveProps {
  title: string
  subtitle: string
}
export const EmptyArchieve = ({ subtitle, title }: EmptyArchieveProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 py-4">
      <Archive
        size={46}
        color="var(--color-text-muted)"
      />
      <div className="flex flex-col items-center gap-y-2">
        <span className="text-center text-title-large font-bold text-text">
          {title}
        </span>
        <span className="text-center text-text-muted">{subtitle}</span>
      </div>
    </div>
  )
}
