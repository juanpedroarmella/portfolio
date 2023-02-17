import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");
  return <Typography>{t("title")}</Typography>;
};

export default Contact;
