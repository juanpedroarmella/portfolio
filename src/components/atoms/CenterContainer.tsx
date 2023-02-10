import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));

const CenterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default CenterContainer;
