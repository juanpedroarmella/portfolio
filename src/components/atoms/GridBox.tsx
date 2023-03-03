import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));

const GridBox = styled(Box)({
  display: "grid",
});

export default GridBox;
