import { Translate } from "next-translate";
import dynamic from "next/dynamic";
import React from "react";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));
const List = dynamic(() => import("@mui/material/List"));
const ListItem = dynamic(() => import("@mui/material/ListItem"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const ListItemText = dynamic(() => import("@mui/material/ListItemText"));
const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const CheckIcon = dynamic(() => import("@mui/icons-material/Check"));

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
        <List disablePadding>
          {arrTasks.map((task: string, index: number) => (
            <ListItem disablePadding key={index}>
              <CenterContainer gap={1}>
                <CheckIcon fontSize="small" />
                <ListItemText primary={task} />
              </CenterContainer>
            </ListItem>
          ))}
        </List>
      </GridBox>
    </GridBox>
  );
};
export default Experience;
