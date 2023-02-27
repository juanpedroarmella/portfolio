import { Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));

const Profile: React.FC = () => {
  const { t } = useTranslation("cv");
  return (
    <Box display="grid" gap={2} width='100%'>
      <Typography variant="h3">{t("profile-title")}</Typography>
      <Typography variant="body1">{t("profile-text")}</Typography>
    </Box>
  );
};
export default Profile;
