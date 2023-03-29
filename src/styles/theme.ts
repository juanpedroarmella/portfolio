import { createTheme } from '@mui/material/styles'
import typography from './typography'
import palette from './palette'

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary'
          },
          style: {
            textTransform: 'capitalize',
            fontWeight: 600,
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            borderRadius: 20,
            '&:hover': {
              backgroundColor: palette.secondary.main
            },
            '&:focus': {
              backgroundColor: palette.primary.dark
            }
          }
        },
        {
          props: {
            variant: 'outlined',
            color: 'primary'
          },
          style: {
            color: palette.primary.main,
            borderColor: palette.primary.main,
            '&:hover': {
              backgroundColor: palette.primary.light,
              borderColor: palette.primary.light
            },
            '&:focus': {
              backgroundColor: palette.primary.dark,
              borderColor: palette.primary.dark
            }
          }
        },
        {
          props: {
            variant: 'text',
            color: 'primary'
          },
          style: {
            color: palette.primary.main,
            '&:hover': {
              backgroundColor: palette.primary.light
            },
            '&:focus': {
              backgroundColor: palette.primary.dark
            }
          }
        }
      ]
    }
  }
})

export default theme
