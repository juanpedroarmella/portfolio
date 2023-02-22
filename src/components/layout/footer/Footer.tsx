import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const FooterWrapper = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.14);
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.4);
  height: 3rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography>Footer</Typography>
    </FooterWrapper>
  );
};

export default Footer;
