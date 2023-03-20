import { Theme } from '@mui/material/styles'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

interface DesktopNavButtonProps {
  theme?: Theme
  selected: boolean
}

const DesktopNavButton = styled(Button)<DesktopNavButtonProps>(props => {
  const { theme, selected } = props

  return {
    variant: 'text',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
    '&:hover': {
      background: 'transparent'
    }
  }
})

export default DesktopNavButton
