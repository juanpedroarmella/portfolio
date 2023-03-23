import type { Translate } from 'next-translate'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useMemo } from 'react'

interface Props {
  t: Translate
}

const Meta: React.FC<Props> = ({ t }) => {
  const { t: tCommon } = useTranslation('common')

  const title = useMemo(() => `${t('title')} - Juan Pedro Armella`, [t])

  const description = useMemo(() => tCommon('description'), [tCommon])

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='resume, currículum, developer, software developer, programador, full-stack developer, technology, juan pedro armella'
      />
      <meta name='author' content='Juan Pedro Armella' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://juanpedroarmella.vercel.app/profile.jpg'
      />
      <meta property='og:locale' content='es_AR' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='@juanpeearmella' />
      <meta name='twitter:creator' content='@juanpeearmella' />
      <link
        rel='preload'
        as='image'
        href='https://juanpedroarmella.vercel.app/profile.jpg'
      />
    </Head>
  )
}

export default Meta
