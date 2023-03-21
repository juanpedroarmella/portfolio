import useIsMobile from '@/hooks/useIsMobile'
import HeaderWrapper from './HeaderWrapper'
import MobileHeader from './MobileHeader'
import Nav from './Nav'
import Settings from '@/components/settings/Settings'

const Header = (): JSX.Element => {
  const isMobile = useIsMobile()

  if (isMobile) return <MobileHeader />

  return (
    <HeaderWrapper component='header' mx='5%'>
      <Nav />
      <Settings />
    </HeaderWrapper>
  )
}

export default Header
