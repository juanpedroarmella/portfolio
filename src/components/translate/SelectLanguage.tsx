import useTranslation from 'next-translate/useTranslation'
import i18nConfig from 'root/i18n.json'
import setLanguage from 'next-translate/setLanguage'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useCallback } from 'react'
import { styled } from '@mui/material/styles'

const StyledMenuItem = styled(MenuItem)({
  '& li.MuiButtonBase-root.MuiMenuItem-root:hover': {
    backgroundColor: 'white'
  }
})

const SelectLanguage = (): JSX.Element => {
  const { t, lang } = useTranslation('common')

  const handleChange = useCallback((event: SelectChangeEvent<unknown>) => {
    void setLanguage(event.target.value as string)
  }, [])

  return (
    <FormControl data-test-id='form-control-select-language'>
      <InputLabel data-test-id='label-select-language'>
        {t('language')}
      </InputLabel>
      <Select
        label={t('language')}
        data-test-id='select-language'
        value={lang}
        onChange={(e) => handleChange(e)}
      >
        {i18nConfig.locales.map((lng: string) => (
          <StyledMenuItem
            data-test-id={`language-${lng}`}
            value={lng}
            key={lng}
          >
            {t(`language-name-${lng}`)}
          </StyledMenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectLanguage
