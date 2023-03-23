import useIsMobile from '@/hooks/useIsMobile'
import HeaderWrapper from './HeaderWrapper'
import MobileHeader from './MobileHeader'
import Nav from './Nav'
import Settings from '@/components/settings/Settings'
import { useEffect, useState } from 'react'

const Header = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <></>
  }

  return (
    <>
      {isMobile
        ? (
          <MobileHeader />
          )
        : (
          <HeaderWrapper
            component='header'
            mx='5%'
            data-test-id='desktop-header-main-container'
          >
            <Nav />
            <Settings />
          </HeaderWrapper>
          )}
    </>
  )
}

export default Header
