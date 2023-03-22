import CenterContainer from '@/components/atoms/CenterContainer';
import Education from '@/components/tenant/cv/Education';
import Experience from '@/components/tenant/cv/Experience';
import Languages from '@/components/tenant/cv/Languages';
import MainTitle from '@/components/tenant/cv/MainTitle';
import Profile from '@/components/tenant/cv/Profile';
import Technologies from '@/components/tenant/cv/Technologies';
import useTranslation from 'next-translate/useTranslation';

const Cv: React.FC = () => {
  const { t } = useTranslation('cv');
  return (
    <CenterContainer direction="column">
      <MainTitle />
      <Profile t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Technologies t={t} />
      <Languages t={t} />
      {/* <OtherSkills /> */}
    </CenterContainer>
  );
};

export default Cv;
