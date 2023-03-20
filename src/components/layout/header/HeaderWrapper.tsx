import useScroll from '@/hooks/useScroll'
import styled from '@emotion/styled'
import { Box, hexToRgb, Theme } from '@mui/material'

interface HeaderWrapperProps {
  theme?: Theme
}

const HeaderWrapper = styled(Box)<HeaderWrapperProps>(props => {
  const { theme } = props
  const scroll = useScroll()

  const rgbString = hexToRgb(theme?.palette.background.default)
  const rgbValues = rgbString
    .slice(rgbString.indexOf('(') + 1, rgbString.lastIndexOf(')'))
    .split(',')
    .toString()
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: `rgba(${rgbValues}, 0.5)`,
    padding: '0.5rem 1rem',
    borderRadius: 20,
    marginTop: '1rem',
    transition: 'box-shadow .2s ease',
    zIndex: 1,
    backdropFilter: 'blur(15px)',
    ...(scroll && {
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 3px 14px'
    })
  }
})

export default HeaderWrapper
