import FlexBox from '@/components/atoms/FlexBox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Props {
  title: string
  description: string
  date: number
  href: string
  linkText: string
}

const Proyect: React.FC<Props> = (props) => {
  return (
    <FlexBox
      component='li'
      data-test-id='proyect-container'
      flexDirection='column'
      mb={2}
      gap={2}
    >
      <Typography variant='h4'>{props.title}</Typography>
      <Typography variant='body1'>{props.description}</Typography>
      <Button
        variant='contained'
        size='small'
        sx={{ width: 'fit-content' }}
        aria-label='Go to proyect button'
      >
        <a href={props.href} target='_blank' rel='noreferrer'>
          {props.linkText}
        </a>
      </Button>
    </FlexBox>
  )
}
export default Proyect
