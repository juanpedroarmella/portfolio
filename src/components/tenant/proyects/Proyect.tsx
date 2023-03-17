import FlexBox from "@/components/atoms/FlexBox";
import { Button, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
  date: number;
  href: string;
  linkText: string;
}

const Proyect: React.FC<Props> = (props) => {
  return (
    <FlexBox flexDirection="column" gap={2}>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Button
        variant="outlined"
        size="small"
        sx={{ width: "fit-content" }}
        color="info"
      >
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.linkText}
        </a>
      </Button>
    </FlexBox>
  );
};
export default Proyect;
