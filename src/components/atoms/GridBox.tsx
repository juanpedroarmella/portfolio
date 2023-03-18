import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const Box = dynamic(async () => await import('@mui/material/Box'))

const GridBox = styled(Box)({
  display: 'grid'
})

export default GridBox
