import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@hatake-design-system/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
