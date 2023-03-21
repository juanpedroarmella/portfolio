import { Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

const Home: React.FC = () => {
  const { t } = useTranslation('home')
  return <Typography>{t('title')}</Typography>
}

export default Home
