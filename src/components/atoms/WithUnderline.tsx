import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const WithUnderline = styled(Typography)(({ theme }) => {
  return {
    position: 'relative',
    textDecoration: 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -6,
      left: 0,
      width: '40%',
      height: '3px',
      backgroundColor: theme.palette.secondary.main,
      transition: 'all 0.2s ease-in'
    }
  }
})

export default WithUnderline
