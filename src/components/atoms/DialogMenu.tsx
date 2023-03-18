import { ButtonProps } from "@mui/material/Button/Button";
import { IconButtonProps } from "@mui/material/IconButton/IconButton";
import React from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

interface DialogMenuProps {
  children: React.ReactNode;
  ActivateDialogButton: React.ReactElement<ButtonProps | IconButtonProps>;
}

const Menu = dynamic(() => import("@mui/material/Menu"));

const DialogMenu: React.FC<DialogMenuProps> = (props) => {
  const { children, ActivateDialogButton } = props;

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
      {ActivateDialogButton &&
        React.cloneElement(ActivateDialogButton, {
          onClick: handleClick,
        })}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem>{children}</MenuItem>
      </Menu>
    </div>
  );
};

export default DialogMenu;
