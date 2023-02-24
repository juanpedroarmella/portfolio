import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/layout/header/Nav"));
const Logo = dynamic(() => import("@/components/layout/header/Logo"));

const Settings = dynamic(() => import("@/components/settings/Settings"));

const HeaderWrapper = styled("header")({
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "white",
  padding: "0.5rem 1rem",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
      <Settings />
    </HeaderWrapper>
  );
};

export default Header;
