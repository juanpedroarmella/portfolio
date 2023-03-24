import Typography from '@mui/material/Typography'
import CenterContainer from './CenterContainer'
import CustomLink from './CustomLink'

interface SocialLinkProps {
  icon: React.ReactNode
  href: string
  text: string
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  return (
    <CenterContainer
      gap={2}
      flexWrap='wrap'
      data-testid='social-link-container'
    >
      {props.icon}
      <CustomLink href={props.href} target='_blank'>
        <Typography
          variant='overline'
          color='text.primary'
          sx={{ textDecoration: 'underline' }}
        >
          {props.text}
        </Typography>
      </CustomLink>
    </CenterContainer>
  )
}

export default SocialLink
