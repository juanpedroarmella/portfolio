import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'

const CenterContainer = dynamic(
  async () => await import('@/components/atoms/CenterContainer')
)
const MainTitle = dynamic(async () => await import('@/components/tenant/cv/MainTitle'))
const Profile = dynamic(async () => await import('@/components/tenant/cv/Profile'))
const Experience = dynamic(async () => await import('@/components/tenant/cv/Experience'))
const Education = dynamic(async () => await import('@/components/tenant/cv/Education'))
const Technologies = dynamic(
  async () => await import('@/components/tenant/cv/Technologies')
)
const Languages = dynamic(async () => await import('@/components/tenant/cv/Languages'))

const GridBox = dynamic(async () => await import('@/components/atoms/GridBox'))

const Cv: React.FC = () => {
  const { t } = useTranslation('cv')
  return (
    <CenterContainer direction='column' gap={8}>
      <MainTitle />
      <GridBox gap={5}>
        <Profile t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Technologies t={t} />
        <Languages t={t} />
        {/* <OtherSkills />

      */}
      </GridBox>
    </CenterContainer>
  )
}

export default Cv
