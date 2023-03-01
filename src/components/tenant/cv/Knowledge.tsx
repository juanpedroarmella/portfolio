import CenterContainer from "@/components/atoms/CenterContainer";
import GridBox from "@/components/atoms/GridBox";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));
import Image from "next/image";

interface KnowledgeProps {}

const Knowledge: React.FC<KnowledgeProps> = () => {
  return (
    <GridBox gap={5}>
      <Typography variant="h3">Knowledge</Typography>
      <CenterContainer direction="column" gap={1}>
        <Image
          src="/language-icons/ts.svg"
          alt="Typescript"
          width={64}
          height={64}
        />
        <Typography variant="h5">Typescript</Typography>
      </CenterContainer>
    </GridBox>
  );
};
export default Knowledge;
