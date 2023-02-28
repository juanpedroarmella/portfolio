import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const MainTitle = dynamic(() => import("@/components/tenant/cv/MainTitle"));
const Profile = dynamic(() => import("@/components/tenant/cv/Profile"));
const Experience = dynamic(() => import("@/components/tenant/cv/Experience"));
const GridBox = dynamic(() => import("@/components/atoms/GridBox"));

const Cv: React.FC = () => {
  const { t } = useTranslation("cv");
  return (
    <CenterContainer direction="column" gap={15}>
      <MainTitle />
      <GridBox gap={5}>
        <Profile t={t} />
        <Experience t={t} />
        {/*<Education />
        <Knowledge />
        <OtherSkills />
        <Languages />
      */}
      </GridBox>
    </CenterContainer>
  );
};

export default Cv;
