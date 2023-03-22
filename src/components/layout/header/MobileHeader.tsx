import FlexBox from '@/components/atoms/FlexBox'
import HeaderWrapper from './HeaderWrapper'
import Nav from './Nav'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@/components/atoms/Drawer'
import IconButton from '@mui/material/IconButton'
import Settings from '@/components/settings/Settings'
import { styled } from '@mui/material/styles'
const MobileHeaderWrapper = styled(HeaderWrapper)(() => {
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
            <MenuIcon color='secondary' />
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
