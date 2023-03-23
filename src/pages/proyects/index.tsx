import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import Proyect from '@/components/tenant/proyects/Proyect'
import useIsMobile from '@/hooks/useIsMobile'
import useSpacing from '@/hooks/useSpacing'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'
import Meta from '@/components/atoms/Meta'

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
    <CenterContainer
      mt={isMobile ? 5 : 10}
      component='article'
      data-test-id='proyects-page-main-container'
    >
      <Meta t={t} />
      <FlexBox
        data-test-id='proyects-subcontainer'
        flexDirection='column'
        gap={1}
        height='100vh'
        {...spacing}
      >
        <Typography variant='h1'>{t('title')}</Typography>
        <List data-test-id='proyects-list-container'>
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
        </List>
      </FlexBox>
    </CenterContainer>
  )
}

export default Proyects
