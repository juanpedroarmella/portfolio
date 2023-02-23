import dynamic from "next/dynamic";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const MainTitle = dynamic(() => import("@/components/tenant/cv/MainTitle"));

const Cv: React.FC = () => {
  return (
    <CenterContainer direction="column">
      <MainTitle />
      {/*
        <AboutMe />
        <Experience />
        <Education />
        <Knowledge />
        <OtherSkills />
        <Languages />
      */}
    </CenterContainer>
  );
};

export default Cv;
