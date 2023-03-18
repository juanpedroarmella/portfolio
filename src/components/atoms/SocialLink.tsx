import dynamic from 'next/dynamic'
import Image from 'next/image'

const CenterContainer = dynamic(
  async () => await import('@/components/atoms/CenterContainer')
)
const CustomLink = dynamic(async () => await import('@/components/atoms/CustomLink'))
const Typography = dynamic(async () => await import('@mui/material/Typography'))

interface SocialLinkProps {
  iconSrc: string
  iconAlt: string
  href: string
  text: string
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  return (
    <CenterContainer gap={1} flexWrap='wrap'>
      <Image src={props.iconSrc} alt={props.iconAlt} width={40} height={40} />
      <CustomLink href={props.href} target='_blank'>
        <Typography
          variant='overline'
          color='gray'
          sx={{ textDecoration: 'underline' }}
        >
          {props.text}
        </Typography>
      </CustomLink>
    </CenterContainer>
  )
}

export default SocialLink
