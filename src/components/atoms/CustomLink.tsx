import styled from '@emotion/styled'
import Link from 'next/link'

const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline'
  }
})

export default CustomLink
