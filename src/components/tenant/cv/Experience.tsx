import CenterContainer from '@/components/atoms/CenterContainer'
import GridBox from '@/components/atoms/GridBox'
import { Typography, List, ListItem, ListItemText } from '@mui/material'
import { Translate } from 'next-translate'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import useSpacing from '@/hooks/useSpacing'
interface ExperienceProps {
  t: Translate
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const { t } = props
  const arrTasks = React.useMemo(
    () => t('experience.tasks.list', {}, { returnObjects: true }) as [],
    [t]
  )
  const spacing = useSpacing()
  return (
    <GridBox gap={2} width='100%' {...spacing}>
      <Typography variant='h3'>{t('experience.title')}</Typography>
      <Typography variant='h5'>{t('experience.company')}</Typography>
      <Typography variant='h6'>{t('experience.position')}</Typography>
      <GridBox gap={1}>
        <Typography variant='body1'>{t('experience.description')}</Typography>
        <Typography variant='body1'>{t('experience.tasks.title')}</Typography>
        <List disablePadding>
          {arrTasks.map((task: string, index: number) => (
            <ListItem disablePadding key={index}>
              <CenterContainer gap={1}>
                <CheckIcon fontSize='small' color='secondary' />
                <ListItemText primary={task} />
              </CenterContainer>
            </ListItem>
          ))}
        </List>
      </GridBox>
    </GridBox>
  )
}
export default Experience
