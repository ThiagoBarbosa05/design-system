import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Close, Description, Root, Title, Viewport } from './styles'

export type ToastProps = ComponentProps<typeof Root> & {
  title: string
  description: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <Root {...props}>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Close asChild>
          <X size={20} />
        </Close>
      </Root>
      <Viewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
