import CenterContainer from '@/components/atoms/CenterContainer'
import GridBox from '@/components/atoms/GridBox'
import Typography from '@mui/material/Typography'
import { capitalize } from '@mui/material/utils'
import Image from 'next/image'

const requireTechImages = (require as any).context(
  'public/language-icons/',
  false,
  /\.svg$/
)

const techImages = requireTechImages
  .keys()
  .filter((path: string) => path.startsWith('public/'))
  .map((path: string) => {
    const pathWithoutLangPrefix = path.replace('public/', '')
    const fileName = pathWithoutLangPrefix
      .replace(/^.*[\\/]/, '')
      .replace(/\.[^.]+$/, '')
    return {
      path: pathWithoutLangPrefix,
      name: capitalize(fileName)
    }
  })

const TechnologiesList: React.FC = () => {
  return (
    <CenterContainer direction='row' flexWrap='wrap' gap={3}>
      {techImages.map((tech: { path: string, name: string }, index: number) => (
        <GridBox gap={1} justifyItems='center' key={index}>
          <Image src={'/' + tech.path} alt={tech.name} width={64} height={64} />
          <Typography variant='h5'>{tech.name}</Typography>
        </GridBox>
      ))}
    </CenterContainer>
  )
}

export default TechnologiesList
