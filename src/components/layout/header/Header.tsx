import useIsMobile from '@/hooks/useIsMobile'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import dynamic from 'next/dynamic'

const Nav = dynamic(async () => await import('@/components/layout/header/Nav'))

const Settings = dynamic(async () => await import('@/components/settings/Settings'))
const MobileHeader = dynamic(async () => await import('@/components/layout/header/MobileHeader'))

const HeaderWrapper = styled(Box)(({ theme }: { theme?: Theme }) => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme?.palette.background.default,
    padding: '0.5rem 1rem',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    borderRadius: 10,
    marginTop: '0.5rem',
    zIndex: 1
  }
})

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
