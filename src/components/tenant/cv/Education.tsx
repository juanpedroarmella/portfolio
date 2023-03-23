import CenterContainer from '@/components/atoms/CenterContainer'
import GridBox from '@/components/atoms/GridBox'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import useSpacing from '@/hooks/useSpacing'
import WithUnderline from '@/components/atoms/WithUnderline'
import { styled } from '@mui/material/styles'
import type { Translate } from 'next-translate'
import { useMemo } from 'react'

interface EducationProps {
  t: Translate
}

const EducationContainer = styled(CenterContainer)(({ theme }) => {
  return {
    gap: '2rem',
    background: theme.palette.background.default,
    alignItems: 'flex-start'
  }
})

const Education: React.FC<EducationProps> = (props) => {
  const { t } = props
  const arrKnowledge = useMemo(
    () => t('education.knowledge.list', {}, { returnObjects: true }) as [],
    [t]
  )
  const spacing = useSpacing()
  return (
    <EducationContainer
      gap={2}
      width='100%'
      direction='column'
      {...spacing}
      data-test-id='education-container'
      component='article'
    >
      <WithUnderline variant='h1'>{t('education.title')}</WithUnderline>
      <Typography variant='h2'>{t('education.career')}</Typography>
      <Typography variant='h3'>{t('education.university')}</Typography>
      <GridBox gap={1} data-test-id='knowledge-container' component='section'>
        <Typography variant='body1'>
          {t('education.knowledge.title')}
        </Typography>
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
    </EducationContainer>
  )
}
export default Education
