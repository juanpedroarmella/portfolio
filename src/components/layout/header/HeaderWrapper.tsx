import useScroll from '@/hooks/useScroll'
import styled from '@emotion/styled'
import { Box, Theme } from '@mui/material'

interface HeaderWrapperProps {
  theme?: Theme
}

const HeaderWrapper = styled(Box)<HeaderWrapperProps>(props => {
  const { theme } = props
  const scroll = useScroll()

  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.default,
    opacity: '0.99',
    padding: '0.5rem 1rem',
    borderRadius: 20,
    marginTop: '1rem',
    transition: 'box-shadow .2s ease',
    zIndex: 1,
    backdropFilter: 'blur(20px)',
    ...(scroll && {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)'
    })
  }
})

export default HeaderWrapper
