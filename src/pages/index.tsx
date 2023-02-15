import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation'

const Typography = dynamic(() => import("@mui/material/Typography"));

const Home: React.FC = () => {
  const { t } = useTranslation('home')
  return <Typography>{t('title')}</Typography>;
};

export default Home;
