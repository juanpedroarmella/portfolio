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

  const image = useMemo(() => '/profile.jpg', []);

  const description = useMemo(() => tCommon('description'), [tCommon]);

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
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
