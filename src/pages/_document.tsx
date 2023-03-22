import useTranslation from 'next-translate/useTranslation'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  const { lang } = useTranslation('common')
  return (
    <Html lang={lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
