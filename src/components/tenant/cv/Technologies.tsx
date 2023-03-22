import GridBox from '@/components/atoms/GridBox'
import useSpacing from '@/hooks/useSpacing'
import Typography from '@mui/material/Typography'
import type { Translate } from 'next-translate'
import TechnologiesList from './TechnologiesList'

interface TechnologiesProps {
  t: Translate
}

const Technologies: React.FC<TechnologiesProps> = (props) => {
  const { t } = props
  const spacing = useSpacing()
  return (
    <GridBox gap={5} {...spacing}>
      <Typography variant='h3'>{t('technologies')}</Typography>
      <TechnologiesList />
    </GridBox>
  )
}
export default Technologies
