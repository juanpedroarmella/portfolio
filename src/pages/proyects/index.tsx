import FlexBox from '@/components/atoms/FlexBox'
import Proyect from '@/components/tenant/proyects/Proyect'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import React from 'react'

const Typography = dynamic(async () => await import('@mui/material/Typography'))

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
  )
}

export default Proyects
