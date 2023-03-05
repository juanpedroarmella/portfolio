import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const FooterWrapper = styled("footer")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "5rem",
  alignItems: "center",
  borderTop: "2px solid rgba(0, 0, 0, 0.14)",
  boxShadow: "0px 4px 8px -4px rgba(0, 0, 0, 0.4)",
  background: "white",
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography>Footer</Typography>
    </FooterWrapper>
  );
};

export default Footer;
