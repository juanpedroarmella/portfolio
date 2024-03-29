import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const FooterWrapper = styled('footer')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '5rem',
    alignItems: 'center',
    borderTop: '2px solid rgba(0, 0, 0, 0.14)',
    boxShadow: '0px 4px 8px -4px rgba(0, 0, 0, 0.4)',
    background: theme?.palette.background.paper
  }
})

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Typography>Footer</Typography>
    </FooterWrapper>
  )
}

export default Footer
