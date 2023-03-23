import useScrollDownIndicator from '@/hooks/useScrollDownIndicator'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import { keyframes, styled } from '@mui/material/styles'

import { useCallback } from 'react'

const ScrollDownIndicator: React.FC = () => {
  const visible = useScrollDownIndicator()

  const handleClick = useCallback((): void => {
    window.scrollTo({
      top: window.innerHeight - 50,
      behavior: 'smooth'
    })
  }, [])

  return (
    <StyledContainer visible={visible} data-testid='scroll-down-container'>
      <Slide direction='down' in={visible} mountOnEnter unmountOnExit>
        <StyledIconButton
          onClick={handleClick}
          aria-label='Click here to scroll down'
          data-testid='scroll-down-indicator-button'
        >
          <ArrowDownward fontSize='large' color='secondary' />
        </StyledIconButton>
      </Slide>
    </StyledContainer>
  )
}

interface ContainerProps {
  visible: boolean
}

const StyledContainer = styled('div')<ContainerProps>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`

const StyledIconButton = styled(IconButton)`
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  animation: ${blink} 2s infinite;

  &:hover {
    background: ${({ theme }) => theme.palette.text.primary};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`

export default ScrollDownIndicator
