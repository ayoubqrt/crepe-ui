import { ark } from '@ark-ui/react'
import { styled } from '@pacha/styled-system'
import { icon } from '@pacha/styled-system'
import { forwardRef } from 'react'
import { Button, ButtonProps } from './button'

export const Icon = styled(ark.svg, icon, {
  defaultProps: {
    // TODO this one seems to cause issues for some icons
    // viewBox: '0 0 24 24',
    role: 'presentation',
    'aria-hidden': true,
    focusable: false,
  },
})

export const IconButton = forwardRef<typeof Button, ButtonProps>((props, ref) => {
  return <Button padding="0" {...props} ref={ref as never} />
})
