import useIsMobile from '@/hooks/useIsMobile'
import useTranslation from 'next-translate/useTranslation'
import MobileNavButton from '../layout/header/MobileNavButton'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import DialogMenu from '../atoms/DialogMenu'
import SelectLanguage from '../translate/SelectLanguage'
import { useCallback, useState } from 'react'

const Settings: React.FC = () => {
  const isMobile = useIsMobile()
  const [selected, setSelected] = useState<boolean>(false)
  const { t } = useTranslation('common')

  const toggleSelected = useCallback((): void => {
    setSelected((prevState) => !prevState)
  }, [])

  const mobileNavButton = (
    <MobileNavButton
      startIcon={<SettingsIcon color='secondary' />}
      selected={selected}
      onClick={toggleSelected}
      data-testid='mobile-button-nav-settings'
    >
      {t('settings')}
    </MobileNavButton>
  )

  const desktopIconButton = (
    <IconButton aria-label='Open settings'>
      <SettingsIcon
        data-testid='desktop-button-nav-settings'
        color='secondary'
      />
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
