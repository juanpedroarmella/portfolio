import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Proyects: React.FC = () => {
  const { t } = useTranslation("proyects");
  return <Typography>{t("title")}</Typography>;
};

export default Proyects;
