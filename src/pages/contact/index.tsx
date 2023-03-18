import useIsMobile from '@/hooks/useIsMobile'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'

const Typography = dynamic(async () => await import('@mui/material/Typography'))
const SocialLink = dynamic(async () => await import('@/components/atoms/SocialLink'))
const FlexBox = dynamic(async () => await import('@/components/atoms/FlexBox'))

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  const isMobile = useIsMobile()
  return (
    <FlexBox
      flexDirection='column'
      alignItems={isMobile ? 'center' : 'flex-start'}
      gap={2}
      width='100%'
    >
      <Typography variant='h3'>{t('title')}</Typography>
      <FlexBox flexDirection='column' gap={1} alignItems='flex-start'>
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
    </FlexBox>
  )
}

export default Contact
