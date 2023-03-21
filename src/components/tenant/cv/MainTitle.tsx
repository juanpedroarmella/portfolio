import CenterContainer from '@/components/atoms/CenterContainer'
import theme from '@/styles/theme'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Container = styled(CenterContainer)({
  background: `linear-gradient(to bottom right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  height: '100vh',
  width: '100%',
  textAlign: 'center'
})

const MainTitle: React.FC = () => {
  return (
    <Container direction='column'>
      <Typography variant='h2'>Juan Pedro Armella</Typography>
      <Typography variant='h3'>Software Developer</Typography>
    </Container>
  )
}
export default MainTitle
