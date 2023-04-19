import useTranslation from 'next-translate/useTranslation'
import i18nConfig from 'root/i18n.json'
import setLanguage from 'next-translate/setLanguage'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useCallback } from 'react'

const SelectLanguage = (): JSX.Element => {
  const { t, lang } = useTranslation('common')

  const handleChange = useCallback((event: SelectChangeEvent<unknown>) => {
    void setLanguage(event.target.value as string)
  }, [])

  return (
    <FormControl data-testid='form-control-select-language'>
      <InputLabel data-testid='label-select-language'>
        {t('language')}
      </InputLabel>
      <Select
        label={t('language')}
        data-testid='select-language'
        value={lang}
        onChange={(e) => handleChange(e)}
      >
        {i18nConfig.locales.map((lng: string) => (
          <MenuItem data-testid={`language-${lng}`} value={lng} key={lng}>
            {t(`language-name-${lng}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectLanguage
