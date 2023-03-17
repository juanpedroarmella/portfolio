import FlexBox from "@/components/atoms/FlexBox";
import Proyect from "@/components/tenant/proyects/Proyect";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import React from "react";

const Typography = dynamic(() => import("@mui/material/Typography"));

interface Proyect {
  title: string;
  description: string;
  date: number;
  href: string;
  linkText: string;
}

const Proyects: React.FC = () => {
  const { t } = useTranslation("proyects");
  const arrProyects = React.useMemo(
    () => t("proyects", {}, { returnObjects: true }) as [],
    [t]
  );

  return (
    <FlexBox flexDirection="column" gap={2}>
      <Typography variant="h3">{t("title")}</Typography>
      {arrProyects.map((proyect: Proyect) => {
        const { title, description, date, href } = proyect;
        const key = `${title}_${description}_${date}_${href}`;
        return (
          <Proyect
            key={key}
            title={title}
            description={description}
            date={date}
            href={href}
            linkText={t("go-to-proyect")}
          />
        );
      })}
    </FlexBox>
  );
};

export default Proyects;
