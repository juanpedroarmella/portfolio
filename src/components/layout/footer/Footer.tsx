import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const FooterWrapper = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid black;
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
