import useIsMobile from '@/hooks/useIsMobile'
import { useEffect, useState } from 'react'
import HeaderWrapper from './HeaderWrapper'
import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'
import slideIn from '@/styles/animations/slideIn'

const MobileHeader = dynamic(async () => await import('./MobileHeader'))
const Nav = dynamic(async () => await import('./Nav'))
const Settings = dynamic(
  async () => await import('@/components/settings/Settings')
)

const AnimatedHeaderWrapper = styled(HeaderWrapper)`
  animation: ${slideIn} 0.5s ease-in-out;
`

const Header = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted && (
        <>
          {isMobile
            ? (
              <MobileHeader />
              )
            : (
              <AnimatedHeaderWrapper
                component='header'
                mx='5%'
                data-testid='desktop-header-main-container'
              >
                <Nav />
                <Settings />
              </AnimatedHeaderWrapper>
              )}
        </>
      )}
    </>
  )
}

export default Header
