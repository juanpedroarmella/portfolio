import styled from "@emotion/styled";
import dynamic from "next/dynamic";

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
  return <LinkButton {...props} buttonProps={{ variant: "text" }} />;
};

const Nav = () => {
  return (
    <Container>
      <NavigationButton href="/cv" text="Cv" />
      <NavigationButton href="/contact" text="Contact" />
    </Container>
  );
};

export default Nav;
