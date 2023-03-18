import useIsMobile from '@/hooks/useIsMobile'
import dynamic from 'next/dynamic'
import HeaderWrapper from './HeaderWrapper'

const Nav = dynamic(async () => await import('@/components/layout/header/Nav'))

const Settings = dynamic(async () => await import('@/components/settings/Settings'))
const MobileHeader = dynamic(async () => await import('@/components/layout/header/MobileHeader'))

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
