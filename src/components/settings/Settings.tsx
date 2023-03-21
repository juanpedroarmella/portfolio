import useIsMobile from '@/hooks/useIsMobile'
import { useTheme } from '@mui/material/styles'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import MobileNavButton from '../layout/header/MobileNavButton'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import DialogMenu from '../atoms/DialogMenu'
import SelectLanguage from '../translate/SelectLanguage'

const Settings: React.FC = () => {
  const isMobile = useIsMobile()
  const theme = useTheme()
  const [selected, setSelected] = useState<boolean>(false)
  const { t } = useTranslation('common')

  const toggleSelected = (): void => {
    setSelected(prevState => !prevState)
  }

  const mobileNavButton = (
    <MobileNavButton
      startIcon={<SettingsIcon color='secondary' />}
      theme={theme}
      selected={selected}
      onClick={toggleSelected}
      data-test-id='mobile-button-nav-settings'
    >
      {t('settings')}
    </MobileNavButton>
  )

  const desktopIconButton = (
    <IconButton>
      <SettingsIcon data-test-id='desktop-button-nav-settings' color='secondary' />
    </IconButton>
  )

  const activateDialogButton = isMobile ? mobileNavButton : desktopIconButton

  return (
    <DialogMenu ActivateDialogButton={activateDialogButton}>
      <SelectLanguage />
    </DialogMenu>
  )
}

export default Settings
