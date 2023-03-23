import Typography from '@mui/material/Typography'
import Image from 'next/image'
import CenterContainer from './CenterContainer'
import CustomLink from './CustomLink'

interface SocialLinkProps {
  iconSrc: string
  iconAlt: string
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
      <Image
        src={props.iconSrc}
        alt={props.iconAlt}
        width={40}
        height={40}
        priority
      />
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
