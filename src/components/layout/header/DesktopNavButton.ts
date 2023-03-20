import { Theme } from '@mui/material/styles'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

interface DesktopNavButtonProps {
  theme?: Theme
}

const DesktopNavButton = styled(Button)<DesktopNavButtonProps>(props => {
  const { theme } = props

  return {
    variant: 'text',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    '&:hover': {
      background: 'transparent',
      color: theme.palette.primary.main
    }
  }
})

export default DesktopNavButton
