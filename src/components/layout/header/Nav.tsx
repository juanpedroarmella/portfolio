import useTranslation from 'next-translate/useTranslation'
import NavigationButton from '@/components/layout/header/NavigationButton'
import PersonIcon from '@mui/icons-material/Person'
import CallIcon from '@mui/icons-material/Call'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  rowGap: 8
})
interface NavProps {
  direction?: 'row' | 'column'
}

const Nav: React.FC<NavProps> = (props) => {
  const { t } = useTranslation('common')
  return (
    <Container
      flexDirection={props.direction ?? 'row'}
      component='nav'
      data-testid='navigation-buttons-container'
    >
      <NavigationButton
        href='/cv'
        text={t('nav-cv')}
        startIcon={<PersonIcon />}
      />
      {/* <NavigationButton
        href='/proyects'
        text={t('nav-proyects')}
        startIcon={<AppsIcon />}
      /> */}
      <NavigationButton
        href='/contact'
        text={t('nav-contact')}
        startIcon={<CallIcon />}
      />
    </Container>
  )
}

export default Nav
