import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);

const MainTitle: React.FC = () => {
  return (
    <CenterContainer direction="column" width="100%">
      <Typography variant="h1">Juan Pedro Armella</Typography>
      <Typography variant="h2">Software Developer</Typography>
    </CenterContainer>
  );
};
export default MainTitle;
