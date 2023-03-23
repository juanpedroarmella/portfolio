import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import type { NextPage } from 'next/types'

const Home: NextPage = () => {
  const { t } = useTranslation('home')
  return <Typography>{t('title')}</Typography>
}

export default Home
