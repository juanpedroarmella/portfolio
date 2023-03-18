import useIsMobile from "@/hooks/useIsMobile";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { useState } from "react";
import MobileNavButton from "../atoms/MobileNavButton";
import NavigationButton from "../atoms/NavigationButton";
import SelectLanguage from "../translate/SelectLanguage";

const IconButton = dynamic(() => import("@mui/material/IconButton"));
const SettingsIcon = dynamic(() => import("@mui/icons-material/Settings"));
const DialogMenu = dynamic(() => import("@/components/atoms/DialogMenu"));

const Settings = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const [selected, setSelected] = useState(false);


  const toggleSelected = () => {
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <DialogMenu
      ActivateDialogButton={
        isMobile ? (
          <MobileNavButton
            startIcon={<SettingsIcon />}
            theme={theme}
            selected={selected}
            onClick={() => toggleSelected()}
          >
            Settings
          </MobileNavButton>
        ) : (
          <IconButton>
            <SettingsIcon />
          </IconButton>
        )
      }
    >
      <SelectLanguage />
    </DialogMenu>
  );
};

export default Settings;
