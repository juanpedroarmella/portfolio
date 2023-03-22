import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const HeaderWrapper = styled(Box)(({ theme }) => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.default,
    opacity: '0.99',
    padding: '0.5rem 1rem',
    borderRadius: 20,
    marginTop: '1rem',
    transition: 'box-shadow .2s ease',
    zIndex: 1,
    backdropFilter: 'blur(20px)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)'
  }
})

export default HeaderWrapper
