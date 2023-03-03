import { capitalize } from "@mui/material/utils";
import dynamic from "next/dynamic";
import Image from "next/image";

const CenterContainer = dynamic(
  () => import("@/components/atoms/CenterContainer")
);
const GridBox = dynamic(() => import("@/components/atoms/GridBox"));
const Typography = dynamic(() => import("@mui/material/Typography"));

const requireTechImages = (require as any).context(
  "public/language-icons/",
  false,
  /\.svg$/
);

const techImages = requireTechImages
  .keys()
  .filter((path: string) => path.startsWith("public/"))
  .map((path: string) => {
    const fileName = path.replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
    const pathWithoutPublic = path.replace("public/", "");
    return {
      path: pathWithoutPublic,
      name: capitalize(fileName),
    };
  });

const Technologies: React.FC = () => {
  return (
    <CenterContainer direction="row" flexWrap="wrap" gap={3}>
      {techImages.map((tech: { path: string; name: string }, index: number) => (
        <GridBox gap={1} justifyItems="center" key={index}>
          <Image src={tech.path} alt={tech.name} width={64} height={64} />
          <Typography variant="h5">{tech.name}</Typography>
        </GridBox>
      ))}
    </CenterContainer>
  );
};

export default Technologies;
