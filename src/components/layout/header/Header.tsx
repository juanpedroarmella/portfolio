import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/layout/header/Nav"));
const Logo = dynamic(() => import("@/components/layout/header/Logo"));
const SelectLanguage = dynamic(
  () => import("@/components/translate/SelectLanguage")
);

const HeaderWrapper = styled("header")`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <SelectLanguage />
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
