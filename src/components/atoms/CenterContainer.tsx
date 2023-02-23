import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

interface CenterContainerProps {
  direction?: "row" | "column";
}

const CenterContainer = styled(Container)<CenterContainerProps>(
  ({ direction }) => ({
    flexDirection: direction || "row",
  })
);

export default CenterContainer;
