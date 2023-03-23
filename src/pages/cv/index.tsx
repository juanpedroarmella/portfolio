import CenterContainer from '@/components/atoms/CenterContainer'
import Meta from '@/components/atoms/Meta'
import Education from '@/components/tenant/cv/Education'
import Experience from '@/components/tenant/cv/Experience'
import Languages from '@/components/tenant/cv/Languages'
import MainTitle from '@/components/tenant/cv/MainTitle'
import Profile from '@/components/tenant/cv/Profile'
import Technologies from '@/components/tenant/cv/Technologies'
import useTranslation from 'next-translate/useTranslation'
import type { NextPage } from 'next/types'

const Cv: NextPage = () => {
  const { t } = useTranslation('cv')
  return (
    <CenterContainer
      data-testid='cv-container'
      component='article'
      direction='column'
    >
      <Meta t={t} />
      <MainTitle />
      <Profile t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Technologies t={t} />
      <Languages t={t} />
      {/* <OtherSkills /> */}
    </CenterContainer>
  )
}

export default Cv
