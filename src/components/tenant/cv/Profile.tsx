import CenterContainer from '@/components/atoms/CenterContainer'
import WithUnderline from '@/components/atoms/WithUnderline'
import useSpacing from '@/hooks/useSpacing'
import { styled, Typography } from '@mui/material'
import { Translate } from 'next-translate'

interface ProfileProps {
  t: Translate
}

const ProfileContainer = styled(CenterContainer)(({ theme }) => {
  return {
    gap: '2rem',
    background: theme.palette.background.default,
    alignItems: 'flex-start'
  }
})

const Profile: React.FC<ProfileProps> = (props) => {
  const { t } = props
  const spacing = useSpacing()
  return (
    <ProfileContainer direction='column' {...spacing}>
      <WithUnderline variant='h3'>About me</WithUnderline>
      <Typography variant='body1'>{t('profile.text')}</Typography>
    </ProfileContainer>
  )
}
export default Profile
