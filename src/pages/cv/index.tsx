import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Cv: React.FC = () => {
  return <Typography>Cv</Typography>;
};

export default Cv;