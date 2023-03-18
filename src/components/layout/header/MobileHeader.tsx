import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import dynamic from 'next/dynamic'

const Settings = dynamic(async () => await import('@/components/settings/Settings'))
const FlexBox = dynamic(async () => await import('@/components/atoms/FlexBox'))
const Nav = dynamic(async () => await import('@/components/layout/header/Nav'))
const IconButton = dynamic(async () => await import('@mui/material/IconButton'))
const MenuIcon = dynamic(async () => await import('@mui/icons-material/Menu'))
const Drawer = dynamic(async () => await import('@/components/atoms/Drawer'))

const MobileHeaderWrapper = styled(FlexBox)(({ theme }: { theme?: Theme }) => {
  return {
    position: 'fixed',
    top: 0,
    width: '100%',
    left: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: theme?.palette.background.default,
    padding: '0.5rem 1rem',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    zIndex: 1
  }
})

const ElementsWrapper = styled(FlexBox)({
  height: '100vh',
  width: '50vw',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  '& > *': {
    width: '100%'
  }
})

const MobileHeader = (): JSX.Element => {
  return (
    <MobileHeaderWrapper component='header'>
      <Drawer
        anchor='right'
        ActivateDrawerButton={
          <IconButton>
            <MenuIcon color='primary' />
          </IconButton>
        }
      >
        <ElementsWrapper>
          <Nav direction='column' />
          <Settings />
        </ElementsWrapper>
      </Drawer>
    </MobileHeaderWrapper>
  )
}

export default MobileHeader
