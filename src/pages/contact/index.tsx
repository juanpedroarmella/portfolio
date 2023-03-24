import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import SocialLink from '@/components/atoms/SocialLink'
import useIsMobile from '@/hooks/useIsMobile'
import useSpacing from '@/hooks/useSpacing'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import Meta from '@/components/atoms/Meta'
import type { NextPage } from 'next/types'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import appear from '@/styles/animations/appear'

const Contact: NextPage = () => {
  const { t } = useTranslation('contact')
  const isMobile = useIsMobile()
  const spacing = useSpacing()
  return (
    <CenterContainer
      direction='column'
      component='article'
      data-testid='contact-main-container'
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
        data-testid='contact-subcontainer'
        sx={{ animation: `${appear} 1s ease-in` }}
      >
        <Typography variant='h1' mb={1}>
          {t('title')}
        </Typography>
        <SocialLink
          text='github.com/juanpedroarmella'
          href='http://github.com/juanpedroarmella'
          icon={<GitHubIcon fontSize='large' />}
        />

        <SocialLink
          text='linkedin.com/in/juanpedroarmella'
          href='http://linkedin.com/in/juanpedroarmella'
          icon={<LinkedInIcon fontSize='large' color='info' />}
        />
        <SocialLink
          text='juanpedroarmella@gmail.com'
          href='mailto:juanpedroarmella@gmail.com?subject=Asunto del correo'
          icon={<EmailIcon fontSize='large' sx={{ fill: 'white' }} />}
        />
      </FlexBox>
    </CenterContainer>
  )
}

export default Contact
