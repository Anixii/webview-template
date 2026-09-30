import { useTheme } from '@shared/theme'
import {
  CheckCircle2Icon,
  InfoIcon,
  Loader2Icon,
  TriangleAlertIcon,
  XCircleIcon,
} from 'lucide-react'
import { Toaster as SonnerToaster } from 'sonner'
import type { ToasterProps } from 'sonner'

function Toaster({ ...props }: ToasterProps) {
  const { theme } = useTheme()

  return (
    <SonnerToaster
      theme={theme}
      position="top-right"
      closeButton
      swipeDirections={['right']}
      toastOptions={{
        classNames: {
          toast:
            'rounded-[20px] border-border bg-background-surface text-foreground shadow-lg font-primary',
          title: 'text-primary font-semibold leading-base text-foreground',
          description: 'text-secondary leading-base text-muted-foreground',
          content: 'flex flex-col gap-1',
          icon: 'text-brand',
          success: 'text-brand',
          info: 'text-text-link',
          warning: 'text-text-yellow',
          error: 'text-destructive',
          loading: 'text-muted-foreground',
          closeButton:
            'border-border bg-background text-foreground hover:bg-muted',
        },
      }}
      icons={{
        success: <CheckCircle2Icon className="size-5" />,
        info: <InfoIcon className="size-5" />,
        warning: <TriangleAlertIcon className="size-5" />,
        error: <XCircleIcon className="size-5" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
