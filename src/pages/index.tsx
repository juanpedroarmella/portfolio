import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(() => import("@/components/layout/Layout"));
const Typography = dynamic(() => import("@mui/material/Typography"));

const Home: React.FC = () => {
  return (
    <Layout>
      <Typography>Test</Typography>
    </Layout>
  );
};

export default Home;
