import useIsMobile from '@/hooks/useIsMobile'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import dynamic from 'next/dynamic'
import React from 'react'

const CenterContainer = dynamic(async () => await import('@/components/atoms/CenterContainer'))
const Header = dynamic(async () => await import('@/components/layout/header/Header'))
const Footer = dynamic(async () => await import('@/components/layout/footer/Footer'))

const LayoutContent = styled(CenterContainer)<{ theme?: Theme }>(props => {
  const isMobile = useIsMobile()

  return {
    paddingLeft: isMobile ? '7%' : '10vw',
    paddingRight: isMobile ? '7%' : '10vw',
    minHeight: '90vh',
    minWidth: '90vw',
    marginTop: isMobile ? '3rem' : '5rem',
    paddingTop: '2rem',
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
