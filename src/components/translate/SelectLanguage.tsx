import React, { useCallback } from 'react'
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from 'root/i18n.json'
import setLanguage from 'next-translate/setLanguage'
import { SelectChangeEvent } from '@mui/material/Select/SelectInput'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface SelectLanguageProps {
  className?: string
}

const SelectLanguage = ({ className }: SelectLanguageProps): JSX.Element => {
  const { t, lang } = useTranslation('common')

  const handleChange = useCallback((event: SelectChangeEvent) => {
    void setLanguage(event.target.value)
  }, [])

  return (
    <FormControl className={className}>
      <InputLabel>{t('language')}</InputLabel>
      <Select label={t('language')} value={lang} onChange={e => handleChange(e)}>
        {i18nConfig.locales.map((lng: string) => (
          <MenuItem value={lng} key={lng}>
            {t(`language-name-${lng}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectLanguage
