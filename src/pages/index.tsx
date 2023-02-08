import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));
const Typography = dynamic(() => import("@mui/material/Typography"));

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography>Test</Typography>
    </Box>
  );
}
