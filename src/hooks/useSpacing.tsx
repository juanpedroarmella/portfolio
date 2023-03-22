import { SystemProps } from '@mui/system'
import useIsMobile from './useIsMobile'

const useSpacing = (): SystemProps => {
  const isMobile = useIsMobile()

  return {
    px: isMobile ? '7%' : '10vw',
    py: '3rem'
  }
}
export default useSpacing
