import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const LinkButton = dynamic(() => import("@/components/atoms/LinkButton"));
const Box = dynamic(() => import("@mui/material/Box"));

const Container = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
});

interface NavigationButtonsProps {
  href: string;
  text: string;
}

const NavigationButton: React.FC<NavigationButtonsProps> = (props) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <LinkButton
      {...props}
      buttonProps={{
        variant: props.href === pathname ? "contained" : "outlined",
      }}
    />
  );
};

interface NavProps {
  direction?: "row" | "column";
}

const Nav: React.FC<NavProps> = (props) => {
  const { t } = useTranslation("common");
  return (
    <Container flexDirection={props.direction || "row"} component="nav">
      <NavigationButton href="/cv" text={t("nav-cv")} />
      <NavigationButton href="/proyects" text={t("nav-proyects")} />
      <NavigationButton href="/contact" text={t("nav-contact")} />
    </Container>
  );
};

export default Nav;
