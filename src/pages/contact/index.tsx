import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import SocialLink from '@/components/atoms/SocialLink'
import { Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  return (
    <CenterContainer direction='column' width='100%' withpadding='true'>
      <FlexBox flexDirection='column' width='100%' height='100vh' gap={1} alignItems='flex-start'>
        <Typography variant='h3'>{t('title')}</Typography>
        <SocialLink
          text='github.com/juanpedroarmella'
          href='http://github.com/juanpedroarmella'
          iconSrc='/github.svg'
          iconAlt='Github'
        />
        <SocialLink
          text='juanpedroarmella@gmail.com'
          href='mailto:juanpedroarmella@gmail.com?subject=Asunto del correo'
          iconSrc='/gmail.svg'
          iconAlt='Gmail'
        />
        <SocialLink
          text='linkedin.com/in/juanpedroarmella'
          href='http://linkedin.com/in/juanpedroarmella'
          iconSrc='/linkedin.svg'
          iconAlt='Github'
        />
      </FlexBox>
    </CenterContainer>
  )
}

export default Contact
