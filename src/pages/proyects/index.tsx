import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import Proyect from '@/components/tenant/proyects/Proyect'
import useIsMobile from '@/hooks/useIsMobile'
import useSpacing from '@/hooks/useSpacing'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

interface ProyectType {
  title: string
  description: string
  date: number
  href: string
  linkText: string
}

const Proyects: React.FC = () => {
  const { t } = useTranslation('proyects')
  const arrProyects = useMemo(
    () => t('proyects', {}, { returnObjects: true }) as [],
    [t]
  )
  const spacing = useSpacing()
  const isMobile = useIsMobile()
  return (
    <CenterContainer mt={isMobile ? 5 : 10}>
      <FlexBox flexDirection='column' gap={2} height='100vh' {...spacing}>
        <Typography variant='h3'>{t('title')}</Typography>
        {arrProyects.map((proyect: ProyectType) => {
          const { title, description, date, href } = proyect
          const key = `${title}_${description}_${date}_${href}`
          return (
            <Proyect
              key={key}
              title={title}
              description={description}
              date={date}
              href={href}
              linkText={t('go-to-proyect')}
            />
          )
        })}
      </FlexBox>
    </CenterContainer>
  )
}

export default Proyects
