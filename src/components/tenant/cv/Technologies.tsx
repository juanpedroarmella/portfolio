import GridBox from '@/components/atoms/GridBox'
import { Typography } from '@mui/material'
import { Translate } from 'next-translate'
import TechnologiesList from './TechnologiesList'

interface TechnologiesProps {
  t: Translate
}

const Technologies: React.FC<TechnologiesProps> = (props) => {
  const { t } = props
  return (
    <GridBox gap={5}>
      <Typography variant='h3'>{t('technologies')}</Typography>
      <TechnologiesList />
    </GridBox>
  )
}
export default Technologies
