import { Typography } from "@mui/material";
import { Translate } from "next-translate";
import dynamic from "next/dynamic";
import React from "react";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));

interface ExperienceProps {
  t: Translate;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const { t } = props;
  const arrTasks = React.useMemo(
    () => t("experience.tasks.list", {}, { returnObjects: true }) as [],
    [t]
  );
  return (
    <GridBox gap={2} width="100%">
      <Typography variant="h3">{t("experience.title")}</Typography>
      <Typography variant="h5">{t("experience.company")}</Typography>
      <Typography variant="h6">{t("experience.position")}</Typography>
      <GridBox gap={1}>
        <Typography variant="body1">{t("experience.description")}</Typography>
        <Typography variant="body1">{t("experience.tasks.title")}</Typography>
        <GridBox component="ul" gap={1} m={0}>
          {arrTasks.map((task: string, index: number) => (
            <li key={index}>{task}</li>
          ))}
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
export default Experience;
