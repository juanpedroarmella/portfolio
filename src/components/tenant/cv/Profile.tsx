import GridBox from '@/components/atoms/GridBox'
import { Typography } from '@mui/material'
import { Translate } from 'next-translate'

interface ProfileProps {
  t: Translate
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { t } = props
  return (
    <GridBox gap={2} width='100%'>
      <Typography variant='h3'>{t('profile.title')}</Typography>
      <Typography variant='body1'>{t('profile.text')}</Typography>
    </GridBox>
  )
}
export default Profile
