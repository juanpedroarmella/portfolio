import useIsMobile from "@/hooks/useIsMobile";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const Header = dynamic(() => import("@/components/layout/header/Header"));
const Footer = dynamic(() => import("@/components/layout/footer/Footer"));

const LayoutContent = styled(CenterContainer)({
  minHeight: "90vh",
  marginTop: "3.5rem",
  paddingTop: "2rem",
  paddingBottom: "2rem",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const isMobile = useIsMobile();
  return (
    <CenterContainer direction="column">
      <Header />
      <LayoutContent direction="column" px={isMobile ? '2vw ': "10vw"}>
        {children}
      </LayoutContent>
      <Footer />
    </CenterContainer>
  );
};
export default Layout;
