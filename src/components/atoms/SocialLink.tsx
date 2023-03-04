import dynamic from "next/dynamic";
import Image from "next/image";

const FlexBox = dynamic(() => import("@/components/atoms/FlexBox"));
const CustomLink = dynamic(() => import("@/components/atoms/CustomLink"));
const Typography = dynamic(() => import("@mui/material/Typography"));

interface SocialLinkProps {
  iconSrc: string;
  iconAlt: string;
  href: string;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  return (
    <FlexBox alignItems="center" gap={1}>
      <Image src={props.iconSrc} alt={props.iconAlt} width={40} height={40} />
      <CustomLink href={props.href} target='_blank'>
        <Typography
          variant="overline"
          color="gray"
          sx={{ textDecoration: "underline" }}
        >
          {props.text}
        </Typography>
      </CustomLink>
    </FlexBox>
  );
};

export default SocialLink;
