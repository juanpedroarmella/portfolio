import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Cv: React.FC = () => {
  const { t } = useTranslation("cv");
  return <Typography>{t("title")}</Typography>;
};

export default Cv;
