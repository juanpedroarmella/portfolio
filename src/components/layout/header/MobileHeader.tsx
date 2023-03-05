import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Settings = dynamic(() => import("@/components/settings/Settings"));
const FlexBox = dynamic(() => import("@/components/atoms/FlexBox"));
const Nav = dynamic(() => import("@/components/layout/header/Nav"));
const Logo = dynamic(() => import("@/components/layout/header/Logo"));
const IconButton = dynamic(() => import("@mui/material/IconButton"));
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));
const Drawer = dynamic(() => import("@/components/atoms/Drawer"));

const MobileHeaderWrapper = styled(FlexBox)({
  position: "fixed",
  top: 0,
  width: "100%",
  left: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  background: "white",
  padding: "0.5rem 1rem",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  zIndex: 1,
});

const ElementsWrapper = styled(FlexBox)({
  height: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 3rem",
  margin: 0,
});

const MobileHeader = () => {
  return (
    <MobileHeaderWrapper component="header">
      <Drawer
        anchor="right"
        ActivateDrawerButton={
          <IconButton>
            <MenuIcon color="primary" />
          </IconButton>
        }
      >
        <ElementsWrapper>
          <Logo />
          <Nav direction="column" />
          <Settings />
        </ElementsWrapper>
      </Drawer>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
