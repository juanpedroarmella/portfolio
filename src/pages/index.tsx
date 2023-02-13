import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/components/layout/Layout"));
const Typography = dynamic(() => import("@mui/material/Typography"));

const Home: React.FC = () => {
  return (
    <Layout>
      <Typography>Page</Typography>
    </Layout>
  );
};

export default Home;
