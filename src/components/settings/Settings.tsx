import dynamic from "next/dynamic";
import SelectLanguage from "../translate/SelectLanguage";

const IconButton = dynamic(() => import("@mui/material/IconButton"));
const SettingsIcon = dynamic(() => import("@mui/icons-material/Settings"));
const DialogMenu = dynamic(() => import("@/components/atoms/DialogMenu"));



const Settings = () => {
  return (
    <DialogMenu
      ActivateTooltipButton={
        <IconButton>
          <SettingsIcon />
        </IconButton>
      }
    >
      <SelectLanguage />
    </DialogMenu>
  );
};

export default Settings;
