import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { Plus } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react'
import { Arrow, Content } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  children: ReactNode
  content: string | ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <Content>
            <Arrow />
            {content}
          </Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
