import dynamic from 'next/dynamic'

const CenterContainer = dynamic(
  async () => await import('@/components/atoms/CenterContainer')
)
const Typography = dynamic(
  async () => await import('@mui/material/Typography')
)

const MainTitle: React.FC = () => {
  return (
    <CenterContainer direction='column' width='100%' textAlign='center'>
      <Typography variant='h2'>Juan Pedro Armella</Typography>
      <Typography variant='h3'>Software Developer</Typography>
    </CenterContainer>
  )
}
export default MainTitle
