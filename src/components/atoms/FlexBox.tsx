import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

const Box = dynamic(async () => await import('@mui/material/Box'))

const FlexBox = styled(Box)({
  display: 'flex'
})

export default FlexBox
