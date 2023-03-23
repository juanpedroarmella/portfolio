import CenterContainer from '../atoms/CenterContainer'
import Header from './header/Header'
import { styled } from '@mui/material/styles'
const LayoutContent = styled(CenterContainer)(({ theme }) => {
  return {
    minHeight: '90vh',
    width: '100%',
    background: theme.palette.background.paper
  }
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <CenterContainer
      direction='column'
      component='article'
      data-testid='layout-container'
    >
      <Header data-testid='header-container' />
      <LayoutContent
        component='section'
        data-testid='layout-content'
        direction='column'
      >
        {children}
      </LayoutContent>
      {/* <Footer /> */}
    </CenterContainer>
  )
}
export default Layout
