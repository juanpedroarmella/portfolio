import dynamic from "next/dynamic";

const IconButton = dynamic(() => import("@mui/material/IconButton"));
const SettingsIcon = dynamic(() => import("@mui/icons-material/Settings"));
const Tooltip = dynamic(() => import("@/components/atoms/Tooltip"));
const SelectLanguage = dynamic(
  () => import("@/components/translate/SelectLanguage")
);


const Settings = () => {
  return (
    <Tooltip
      ActivateTooltipButton={
        <IconButton>
          <SettingsIcon />
        </IconButton>
      }
    >
      <SelectLanguage />
    </Tooltip>
  );
};

export default Settings;
