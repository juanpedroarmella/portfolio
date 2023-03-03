import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Translate } from "next-translate";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));
const TechnologiesList = dynamic(
  () => import("@/components/tenant/cv/TechnologiesList")
);

interface TechnologiesProps {
  t: Translate;
}

const Technologies: React.FC<TechnologiesProps> = (props) => {
  const { t } = props;
  return (
    <GridBox gap={5}>
      <Typography variant="h3">{t("technologies")}</Typography>
      <TechnologiesList />
    </GridBox>
  );
};
export default Technologies;
