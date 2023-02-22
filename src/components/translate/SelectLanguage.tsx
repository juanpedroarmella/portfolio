import React from "react";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "root/i18n.json";
import setLanguage from "next-translate/setLanguage";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const { locales } = i18nConfig;

const SelectLanguage = () => {
  const { t, lang } = useTranslation("common");

  const handleChange = React.useCallback(
    (event: SelectChangeEvent<unknown>) => {
      setLanguage(event.target.value as string);
    },
    []
  );
  return (
    <FormControl>
      <InputLabel>{t(`language`)}</InputLabel>
      <Select label={t(`language`)} value={lang} onChange={handleChange}>
        {locales.map((lng) => {
          return (
            <MenuItem value={lng} key={lng}>
              {t(`language-name-${lng}`)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectLanguage;
