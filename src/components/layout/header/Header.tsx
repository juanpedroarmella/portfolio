import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/layout/header/Nav"));

const HeaderWrapper = styled("header")`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
