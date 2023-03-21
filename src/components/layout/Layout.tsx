import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import React from 'react'
import CenterContainer from '../atoms/CenterContainer'
import Footer from './footer/Footer'
import Header from './header/Header'

const LayoutContent = styled(CenterContainer)<{ theme?: Theme }>(props => {
  return {
    minHeight: '90vh',
    paddingBottom: '2rem',
    background: props.theme.palette.background.paper
  }
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props
  return (
    <CenterContainer direction='column'>
      <Header />
      <LayoutContent direction='column'>{children}</LayoutContent>
      <Footer />
    </CenterContainer>
  )
}
export default Layout
