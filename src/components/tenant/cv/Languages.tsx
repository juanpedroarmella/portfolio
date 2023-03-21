import { SxProps } from '@mui/material/styles'
import { Translate } from 'next-translate'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import CustomLink from '@/components/atoms/CustomLink'
import FlexBox from '@/components/atoms/FlexBox'
import GridBox from '@/components/atoms/GridBox'
import { List, ListItem, ListItemText } from '@mui/material'

const SmallCheckIcon = (): JSX.Element => {
  return <CheckIcon fontSize='small' sx={{ mt: 1 }} color='secondary' />
}

interface Body2Props {
  children: React.ReactNode
  sx?: SxProps
}

const Body2: React.FC<Body2Props> = (props): JSX.Element => {
  return (
    <Typography variant='body2' color='text.secondary' sx={props.sx}>
      {props.children}
    </Typography>
  )
}

interface LanguagesProps {
  t: Translate
}

const Languages: React.FC<LanguagesProps> = (props): JSX.Element => {
  const { t } = props
  return (
    <GridBox gap={2} width='100%'>
      <Typography variant='h3'>{t('languages.title')}</Typography>
      <List>
        <ListItem disablePadding>
          <FlexBox gap={1}>
            <SmallCheckIcon />
            <ListItemText primary={t('languages.spanish')} secondary={t('languages.native')} />
          </FlexBox>
        </ListItem>
        <ListItem disablePadding>
          <FlexBox gap={1}>
            <SmallCheckIcon />
            <GridBox>
              <ListItemText
                disableTypography
                sx={{ mt: 1 }}
                primary={<Typography>English</Typography>}
                secondary={
                  <GridBox mt='0.3rem'>
                    <Body2>C1 Advanced</Body2>
                    <Body2>Reading - C2 Proficient</Body2>
                    <Body2>Listening - B2 Upper Intermediate</Body2>
                    <Body2 sx={{ textDecoration: 'underline' }}>
                      <CustomLink href='https://www.efset.org/cert/4funib' target='_blank'>
                        Test EF
                      </CustomLink>
                    </Body2>
                  </GridBox>
                }
              />
            </GridBox>
          </FlexBox>
        </ListItem>
      </List>
    </GridBox>
  )
}
export default Languages
