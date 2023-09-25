import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Content = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '5px',
  padding: '$3 $4',
  color: '$gray100',
  textAlign: 'center',
  lineHeight: '$short',
  fontSize: '$sm',
  fontWeight: '$medium',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
