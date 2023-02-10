import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const Header = dynamic(() => import("@/components/layout/header/Header"));

const LayoutWrapper = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  height: 100vh;
`;

const LayoutContent = styled(CenterContainer)({
  height: "100vh",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <LayoutWrapper>
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
};
export default Layout;
