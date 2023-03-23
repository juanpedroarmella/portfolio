import CenterContainer from '@/components/atoms/CenterContainer'
import GridBox from '@/components/atoms/GridBox'
import type { Translate } from 'next-translate'
import CheckIcon from '@mui/icons-material/Check'
import useSpacing from '@/hooks/useSpacing'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useMemo } from 'react'
interface ExperienceProps {
  t: Translate
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const { t } = props
  const arrTasks = useMemo(
    () => t('experience.tasks.list', {}, { returnObjects: true }) as [],
    [t]
  )
  const spacing = useSpacing()
  return (
    <GridBox
      gap={2}
      width='100%'
      {...spacing}
      data-test-id='experience-container'
      component='article'
    >
      <Typography variant='h1'>{t('experience.title')}</Typography>
      <Typography variant='h3'>{t('experience.company')}</Typography>
      <Typography variant='h4'>{t('experience.position')}</Typography>
      <GridBox
        gap={1}
        data-test-id='experience-tasks-container'
        component='section'
      >
        <Typography variant='body1'>{t('experience.description')}</Typography>
        <Typography variant='body1'>{t('experience.tasks.title')}</Typography>
        <List disablePadding>
          {arrTasks.map((task: string, index: number) => (
            <ListItem disablePadding key={index}>
              <CenterContainer gap={1} data-test-id={`container-task-${index}`}>
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
