import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);

const LayoutWrapper = styled(CenterContainer)({
  height: "100vh",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
export default Layout;
