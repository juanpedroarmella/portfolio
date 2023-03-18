import FlexBox from '@/components/atoms/FlexBox'
import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import dynamic from 'next/dynamic'
import HeaderWrapper from './HeaderWrapper'

const Settings = dynamic(async () => await import('@/components/settings/Settings'))
const Nav = dynamic(async () => await import('@/components/layout/header/Nav'))
const IconButton = dynamic(async () => await import('@mui/material/IconButton'))
const MenuIcon = dynamic(async () => await import('@mui/icons-material/Menu'))
const Drawer = dynamic(async () => await import('@/components/atoms/Drawer'))

const MobileHeaderWrapper = styled(HeaderWrapper)(({ theme }: { theme?: Theme }) => {
  return {
    marginTop: '.5rem',
    width: '96%'
  }
})

const ElementsWrapper = styled(FlexBox)({
  height: '100vh',
  width: '60vw',
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
    <MobileHeaderWrapper component='header' mx='2%'>
      <Drawer
        anchor='left'
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
