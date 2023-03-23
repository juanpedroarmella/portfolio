import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'

interface DesktopNavButtonProps {
  selected: boolean
}

const DesktopNavButton = styled(Button)<DesktopNavButtonProps>((props) => {
  const { theme, selected } = props

  return {
    variant: 'text',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
    position: 'relative',
    textDecoration: 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 3,
      left: 0,
      width: selected ? '35%' : 0,
      marginLeft: '10%',
      height: '2px',
      backgroundColor: theme.palette.text.primary,
      transition: 'all 0.2s ease-in'
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
      '&::after': {
        width: '35%',
        backgroundColor: theme.palette.secondary.main
      }
    }
  }
})

export default DesktopNavButton
