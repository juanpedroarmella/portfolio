import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));

const Profile: React.FC = () => {
  return (
    <Box display="grid" gap={2}>
      <Typography variant="h3">Profile</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        beatae neque rerum veritatis omnis obcaecati velit corrupti expedita ab
        aliquid animi excepturi sequi odio magni pariatur, explicabo distinctio
        cum quam?
      </Typography>
    </Box>
  );
};
export default Profile;
