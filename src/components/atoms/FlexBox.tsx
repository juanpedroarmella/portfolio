import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const Box = dynamic(() => import("@mui/material/Box"));

const FlexBox = styled(Box)({
  display: "flex",
});

export default FlexBox;
