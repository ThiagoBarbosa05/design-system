import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@hatake-design-system/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hello</Button>,
    content: 'Hello world',
  },
  decorators: [
    (story) => {
      return (
        <Box>
          <div style={{ padding: '12rem' }}>{story()}</div>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
