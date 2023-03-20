import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 500,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.3
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5
    }
  }
})

export default theme
