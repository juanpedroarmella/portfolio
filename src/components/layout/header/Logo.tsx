import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@mui/material/Button"));

const Logo = () => {
  return (
    <Button variant="text" href="/">
      Logo
    </Button>
  );
};

export default Logo;
