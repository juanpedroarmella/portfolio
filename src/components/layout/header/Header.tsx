import useIsMobile from '@/hooks/useIsMobile'
import { useEffect, useState } from 'react'
import HeaderWrapper from './HeaderWrapper'

import dynamic from 'next/dynamic'

const MobileHeader = dynamic(async () => await import('./MobileHeader'))
const Nav = dynamic(async () => await import('./Nav'))
const Settings = dynamic(async () => await import('@/components/settings/Settings'))

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
              <HeaderWrapper
                component='header'
                mx='5%'
                data-testid='desktop-header-main-container'
              >
                <Nav />
                <Settings />
              </HeaderWrapper>
              )}
        </>
      )}
    </>
  )
}

export default Header
