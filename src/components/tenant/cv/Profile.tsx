import { Typography } from "@mui/material";
import { Translate } from "next-translate";
import dynamic from "next/dynamic";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));

interface ProfileProps {
  t: Translate;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { t } = props;
  return (
    <GridBox gap={2} width="100%">
      <Typography variant="h3">{props.t("profile.title")}</Typography>
      <Typography variant="body1">{props.t("profile.text")}</Typography>
    </GridBox>
  );
};
export default Profile;
