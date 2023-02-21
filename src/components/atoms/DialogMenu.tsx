import { ButtonProps } from "@mui/material/Button/Button";
import { IconButtonProps } from "@mui/material/IconButton/IconButton";
import React from "react";
import dynamic from "next/dynamic";
import { Menu } from "@mui/material";

interface DialogMenuProps {
  children: React.ReactNode;
  ActivateTooltipButton: React.ReactElement<ButtonProps | IconButtonProps>;
}

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
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </div>
  );
};

export default DialogMenu;
