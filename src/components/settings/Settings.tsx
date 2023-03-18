import useIsMobile from '@/hooks/useIsMobile'
import { useTheme } from '@mui/material/styles'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import MobileNavButton from '../atoms/MobileNavButton'
import SelectLanguage from '../translate/SelectLanguage'

const IconButton = dynamic(async () => await import('@mui/material/IconButton'))
const SettingsIcon = dynamic(async () => await import('@mui/icons-material/Settings'))
const DialogMenu = dynamic(async () => await import('@/components/atoms/DialogMenu'))

const Settings = (): JSX.Element => {
  const isMobile = useIsMobile()
  const theme = useTheme()
  const [selected, setSelected] = useState(false)
  const { t } = useTranslation('common')

  const toggleSelected = (): void => {
    setSelected(!selected)
  }

  return (
    <DialogMenu
      ActivateDialogButton={
        isMobile
          ? (
            <MobileNavButton
              startIcon={<SettingsIcon />}
              theme={theme}
              selected={selected}
              onClick={() => toggleSelected()}
            >
              {t('settings')}
            </MobileNavButton>
            )
          : (
            <IconButton>
              <SettingsIcon />
            </IconButton>
            )
      }
    >
      <SelectLanguage />
    </DialogMenu>
  )
}

export default Settings
