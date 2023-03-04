import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));
const GridBox = dynamic(() => import("@/components/atoms/GridBox"));
const SocialLink = dynamic(() => import("@/components/atoms/SocialLink"));
const FlexBox = dynamic(() => import("@/components/atoms/FlexBox"));

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");
  return (
    <FlexBox flexDirection='column' gap={2}>
      <Typography variant="h3">{t("title")}</Typography>
      <GridBox >
        <SocialLink
          text="github.com/juanpedroarmella"
          href="http://github.com/juanpedroarmella"
          iconSrc="/github.svg"
          iconAlt="Github"
        />
        <SocialLink
          text="juanpedroarmella@gmail.com"
          href="mailto:juanpedroarmella@gmail.com?subject=Asunto del correo"
          iconSrc="/gmail.svg"
          iconAlt="Gmail"
        />
        <SocialLink
          text="linkedin.com/in/juanpedroarmella"
          href="http://linkedin.com/in/juanpedroarmella"
          iconSrc="/linkedin.svg"
          iconAlt="Github"
        />
      </GridBox>
    </FlexBox>
  );
};

export default Contact;
