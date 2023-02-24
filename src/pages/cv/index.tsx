import dynamic from "next/dynamic";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const MainTitle = dynamic(() => import("@/components/tenant/cv/MainTitle"));
const Profile = dynamic(() => import("@/components/tenant/cv/Profile"));
const Experience = dynamic(() => import("@/components/tenant/cv/Experience"));

const Cv: React.FC = () => {
  return (
    <CenterContainer direction="column" gap={12}>
      <MainTitle />
      <Profile />
      <Experience />
      {/*<Education />
        <Knowledge />
        <OtherSkills />
        <Languages />
      */}
    </CenterContainer>
  );
};

export default Cv;
