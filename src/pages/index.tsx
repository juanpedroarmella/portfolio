import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Home: React.FC = () => {
  return <Typography>Home</Typography>;
};

export default Home;
