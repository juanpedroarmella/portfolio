import CenterContainer from '@/components/atoms/CenterContainer'
import GridBox from '@/components/atoms/GridBox'
import { Translate } from 'next-translate'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'

interface EducationProps {
  t: Translate
}

const Education: React.FC<EducationProps> = props => {
  const { t } = props
  const arrKnowledge = React.useMemo(() => t('education.knowledge.list', {}, { returnObjects: true }) as [], [t])
  return (
    <GridBox gap={2} width='100%'>
      <Typography variant='h3'>{t('education.title')}</Typography>
      <Typography variant='h5'>{t('education.career')}</Typography>
      <Typography variant='h6'>{t('education.university')}</Typography>
      <GridBox gap={1}>
        <Typography variant='body1'>{t('education.knowledge.title')}</Typography>
        <List>
          {arrKnowledge.map((task: string, index: number) => (
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
export default Education
