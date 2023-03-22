import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import SocialLink from '@/components/atoms/SocialLink'
import useIsMobile from '@/hooks/useIsMobile'
import useSpacing from '@/hooks/useSpacing'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import Meta from '@/components/atoms/Meta'

const Contact: React.FC = () => {
  const { t } = useTranslation('contact')
  const isMobile = useIsMobile()
  const spacing = useSpacing()
  return (
    <CenterContainer
      direction='column'
      component='article'
      data-test-id='contact-main-container'
      width='100%'
      mt={isMobile ? 5 : 10}
      {...spacing}
    >
      <Meta t={t} />
      <FlexBox
        flexDirection='column'
        width='100%'
        height='100vh'
        gap={1}
        alignItems='flex-start'
        data-test-id='contact-subcontainer'
      >
        <Typography variant='h3' mb={1}>
          {t('title')}
        </Typography>
        <SocialLink
          text='github.com/juanpedroarmella'
          href='http://github.com/juanpedroarmella'
          iconSrc='/github.svg'
          iconAlt='Github'
        />

        <SocialLink
          text='linkedin.com/in/juanpedroarmella'
          href='http://linkedin.com/in/juanpedroarmella'
          iconSrc='/linkedin.svg'
          iconAlt='Github'
        />
        <SocialLink
          text='juanpedroarmella@gmail.com'
          href='mailto:juanpedroarmella@gmail.com?subject=Asunto del correo'
          iconSrc='/gmail.svg'
          iconAlt='Gmail'
        />
      </FlexBox>
    </CenterContainer>
  )
}

export default Contact
