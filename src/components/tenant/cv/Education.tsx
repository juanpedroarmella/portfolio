import { Typography } from "@mui/material";
import { Translate } from "next-translate";
import dynamic from "next/dynamic";
import React from "react";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));

interface EducationProps {
  t: Translate;
}

const Education: React.FC<EducationProps> = (props) => {
  const { t } = props;
  const arrKnowledge = React.useMemo(
    () => t("education.knowledge.list", {}, { returnObjects: true }) as [],
    [t]
  );
  return (
    <GridBox gap={2} width="100%">
      <Typography variant="h3">{t("education.title")}</Typography>
      <Typography variant="h5">{t("education.career")}</Typography>
      <Typography variant="h6">{t("education.university")}</Typography>
      <GridBox gap={1}>
        <Typography variant="body1">{t("education.knowledge.title")}</Typography>
        <GridBox component="ul" gap={1} m={0}>
          {arrKnowledge.map((task: string, index: number) => (
            <li key={index}>{task}</li>
          ))}
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
export default Education;
