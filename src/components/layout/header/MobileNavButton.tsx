import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
interface MobileNavButtonProps {
  selected: boolean
}

const MobileNavButton = styled(Button)<MobileNavButtonProps>(
  ({ selected, theme }) => ({
    variant: 'text',
    width: '100%',
    justifyContent: 'start',
    paddingLeft: '1rem',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: selected
      ? theme.palette.text.primary
      : theme.palette.secondary.light,
    background: selected ? theme.palette.action.focus : 'inherit'
  })
)

export default MobileNavButton
