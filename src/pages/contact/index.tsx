import dynamic from "next/dynamic";

const Typography = dynamic(() => import("@mui/material/Typography"));

const Contact: React.FC = () => {
  return <Typography>Contact</Typography>;
};

export default Contact;