import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const Header = dynamic(() => import("@/components/layout/header/Header"));
const Footer = dynamic(() => import("@/components/layout/footer/Footer"));

const LayoutContent = styled(CenterContainer)({
  maxWidth: "85vw",
  minHeight: "100vh",
  marginTop: "3.5rem",
  padding: "5rem",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <CenterContainer direction="column">
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </CenterContainer>
  );
};
export default Layout;
