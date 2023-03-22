import { Translate } from 'next-translate';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useMemo } from 'react';

interface Props {
  t: Translate;
}

const Meta: React.FC<Props> = (props) => {
  const { t } = props;

  const { t: tCommon } = useTranslation('common');

  const title = useMemo(() => `${t('title')} - Juan Pedro Armella`, [t]);

  const image = useMemo(
    () => 'https://juanpedroarmella.vercel.app/profile',
    [],
  );

  const description = useMemo(() => tCommon('description'), [tCommon]);

  const twitterUsername = useMemo(() => '@juanpeearmella', []);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="resume, currículum, developer, software developer, programador, full-stack developer, technology, juan pedro armella"
      />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Juan Pedro Armella" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://juanpedroarmella.vercel.app/" />
      <meta property="og:locale" content="es_AR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      <meta property="linkedin:image:width" content="1200" />
      <meta property="linkedin:image:height" content="628" />
    </Head>
  );
};

export default Meta;
