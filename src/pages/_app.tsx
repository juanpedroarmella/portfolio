import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from '@/styles/theme'

const GlobalStyles = dynamic(async () => await import('@/styles/GlobalStyles'))
const Layout = dynamic(async () => await import('@/components/layout/Layout'))

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
