import CenterContainer from '@/components/atoms/CenterContainer';
import Education from '@/components/tenant/cv/Education';
import Experience from '@/components/tenant/cv/Experience';
import Languages from '@/components/tenant/cv/Languages';
import MainTitle from '@/components/tenant/cv/MainTitle';
import Technologies from '@/components/tenant/cv/Technologies';
import useTranslation from 'next-translate/useTranslation';

const Cv: React.FC = () => {
  const { t } = useTranslation('cv');
  return (
    <CenterContainer direction="column" gap={8}>
      <MainTitle />
      <CenterContainer
        direction="column"
        withpadding="true"
        gap={5}
        sx={{ marginTop: 0 }}
      >
        <Experience t={t} />
        <Education t={t} />
        <Technologies t={t} />
        <Languages t={t} />
        {/* <OtherSkills /> */}
      </CenterContainer>
    </CenterContainer>
  );
};

export default Cv;
