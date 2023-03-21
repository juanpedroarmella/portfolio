import useIsMobile from '@/hooks/useIsMobile'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface ContainerProps {
  withpadding?: string
  direction?: 'row' | 'column'
}

const CenterContainer = styled(Box)<ContainerProps>(props => {
  const isMobile = useIsMobile()
  const { withpadding = false, direction = 'row' } = props
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: direction,
    ...(Boolean(withpadding) && {
      paddingLeft: isMobile ? '7%' : '10vw',
      paddingRight: isMobile ? '7%' : '10vw',
      marginTop: isMobile ? '3rem' : '5rem',
      paddingTop: '2rem'
    })
  }
})

export default CenterContainer
