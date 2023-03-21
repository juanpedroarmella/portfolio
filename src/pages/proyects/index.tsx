import CenterContainer from '@/components/atoms/CenterContainer'
import FlexBox from '@/components/atoms/FlexBox'
import Proyect from '@/components/tenant/proyects/Proyect'
import { Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

interface ProyectType {
  title: string
  description: string
  date: number
  href: string
  linkText: string
}

const Proyects: React.FC = () => {
  const { t } = useTranslation('proyects')
  const arrProyects = React.useMemo(() => t('proyects', {}, { returnObjects: true }) as [], [t])

  return (
    <CenterContainer withpadding='true'>
      <FlexBox flexDirection='column' gap={2} height='100vh'>
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
