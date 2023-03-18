import { Theme } from "@mui/material/styles";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";

interface MobileNavButtonProps {
  selected: boolean;
  theme: Theme;
}

const MobileNavButton = styled(Button)<MobileNavButtonProps>(
  ({ selected, theme }) => ({
    variant: "text",
    width: "100%",
    size: "large",
    justifyContent: "start",
    paddingLeft: "1rem",
    columnGap: "3%",
    fontWeight: "800",
    textTransform: "capitalize",
    color: selected
      ? theme.palette.primary.main
      : theme.palette.text.secondary,
    background: selected ? blue[50] : "inherit",
  })
);

export default MobileNavButton;
