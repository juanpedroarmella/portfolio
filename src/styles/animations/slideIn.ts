import { keyframes } from '@mui/material/styles'

const slideIn = keyframes`
from {
  transform: translateX(-100%);
  opacity:0;
}

to {
  transform: translateX(0%);
  opacity:1;
}`

export default slideIn
