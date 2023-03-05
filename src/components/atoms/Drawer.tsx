import { ButtonProps } from "@mui/material/Button";
import { IconButtonProps } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const Drawer = dynamic(() => import("@mui/material/Drawer"));

interface Props {
  anchor: "top" | "bottom" | "left" | "right";
  ActivateDrawerButton: React.ReactElement<ButtonProps | IconButtonProps>;
  children: React.ReactNode;
}

const TemporaryDrawer: React.FC<Props> = (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: typeof props.anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <React.Fragment key={props.anchor}>
        {props.ActivateDrawerButton &&
          React.cloneElement(props.ActivateDrawerButton, {
            onClick: toggleDrawer(props.anchor, true),
          })}
        <Drawer
          anchor={props.anchor}
          open={state[props.anchor]}
          onClose={toggleDrawer(props.anchor, false)}
        >
          {props.children}
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default TemporaryDrawer;
