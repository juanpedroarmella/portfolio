import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const LinkButton = dynamic(() => import("@/components/atoms/LinkButton"));

const Container = styled("nav")`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

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

const Nav = () => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <NavigationButton href="/cv" text={t("nav-cv")} />
      <NavigationButton href="/contact" text={t("nav-contact")} />
    </Container>
  );
};

export default Nav;
