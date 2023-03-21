import type { AppProps } from 'next/app'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from '@/styles/theme'
import Layout from '@/components/layout/Layout'
import GlobalStyles from '@/styles/GlobalStyles'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
