  import { ButtonProps } from "@mui/material/Button/Button";
  import { IconButtonProps } from "@mui/material/IconButton/IconButton";
  import React from "react";
  import dynamic from "next/dynamic";

  const Box = dynamic(() => import("@mui/material/Box"));
  const MuiTooltip = dynamic(() => import("@mui/material/Tooltip"));
  const ClickAwayListener = dynamic(
    () => import("@mui/material/ClickAwayListener")
  );

  interface TooltipProps {
    children: React.ReactNode;
    ActivateTooltipButton: React.ReactElement<ButtonProps | IconButtonProps>;
  }

  const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, ActivateTooltipButton } = props;
    const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);

    const handleClick = React.useCallback(() => {
      tooltipIsOpen ? setTooltipIsOpen(false) : setTooltipIsOpen(true);
    }, [tooltipIsOpen]);

    return (
      <MuiTooltip
        open={tooltipIsOpen}
        arrow
        PopperProps={{
          disablePortal: true,
        }}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <ClickAwayListener onClickAway={() => setTooltipIsOpen(false)}>
            <Box display="flex" justifyContent="center" textAlign="center">
              {children}
            </Box>
          </ClickAwayListener>
        }
      >
        <div>
          {ActivateTooltipButton &&
            React.cloneElement(ActivateTooltipButton, {
              onClick: handleClick,
            })}
        </div>
      </MuiTooltip>
    );
  };

  export default Tooltip;
