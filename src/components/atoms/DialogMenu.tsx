import { ButtonProps } from "@mui/material/Button/Button";
import { IconButtonProps } from "@mui/material/IconButton/IconButton";
import React from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";

interface DialogMenuProps {
  children: React.ReactNode;
  ActivateTooltipButton: React.ReactElement<ButtonProps | IconButtonProps>;
}

const Menu = dynamic(() => import("@mui/material/Menu"));

const DialogMenu: React.FC<DialogMenuProps> = (props) => {
  const { children, ActivateTooltipButton } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {ActivateTooltipButton &&
        React.cloneElement(ActivateTooltipButton, {
          onClick: handleClick,
        })}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <Box px={2} py={1}>
          {children}
        </Box>
      </Menu>
    </div>
  );
};

export default DialogMenu;
