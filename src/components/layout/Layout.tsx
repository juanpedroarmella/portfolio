import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const Header = dynamic(() => import("@/components/layout/header/Header"));
const Footer = dynamic(() => import("@/components/layout/footer/Footer"));

const LayoutWrapper = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const LayoutContent = styled(CenterContainer)({
  minHeight: "100vh",
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
      <Footer />
    </LayoutWrapper>
  );
};
export default Layout;
