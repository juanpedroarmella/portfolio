import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

interface ContainerProps {
  direction?: 'row' | 'column'
}

const CenterContainer = styled(Box)<ContainerProps>((props) => {
  const { direction = 'row' } = props
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: direction
  }
})

export default CenterContainer
