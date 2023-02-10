import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/layout/header/Nav"));

const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
