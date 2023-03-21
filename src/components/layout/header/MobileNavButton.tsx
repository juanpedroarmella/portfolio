import { Theme } from '@mui/material/styles'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

interface MobileNavButtonProps {
  selected: boolean
  theme: Theme
}

const MobileNavButton = styled(Button)<MobileNavButtonProps>(({ selected, theme }) => ({
  variant: 'text',
  width: '100%',
  justifyContent: 'start',
  paddingLeft: '1rem',
  fontWeight: '600',
  textTransform: 'capitalize',
  color: selected ? theme.palette.text.primary : theme.palette.secondary.main,
  background: selected ? theme.palette.action.focus : 'inherit'
}))

export default MobileNavButton
