import CenterContainer from '@/components/atoms/CenterContainer'
import ScrollDownIndicator from '@/components/atoms/ScrollDownIndicator'
import useSpacing from '@/hooks/useSpacing'
import theme from '@/styles/theme'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Box from '@mui/system/Box'
import Image from 'next/image'

const Container = styled(CenterContainer)({
  background: `linear-gradient(to bottom right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  height: '100vh',
  width: '100%',
  textAlign: 'center',
  marginTop: 0
})

const MainTitle: React.FC = () => {
  const spacing = useSpacing()
  return (
    <Container direction='column' gap={4}>
      <CenterContainer {...spacing} direction='column' gap={4} width='80%'>
        <Image
          src='/profile.jpg'
          alt='Foto de perfil Juan Pedro Armella'
          width={200}
          height={200}
          style={{ borderRadius: 200 }}
        />
        <Box>
          <Typography variant='h2'>Juan Pedro Armella</Typography>
          <Typography variant='h3'>Software Developer</Typography>
        </Box>
      </CenterContainer>
      <ScrollDownIndicator />
    </Container>
  )
}
export default MainTitle
