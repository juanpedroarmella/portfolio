import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const LinkButton = dynamic(() => import("@/components/atoms/LinkButton"));

const Container = styled("nav")`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Nav = () => {
  return (
    <Container>
      <LinkButton href="/cv" text="Cv" />
      <LinkButton href="/contact" text="Contact" />
    </Container>
  );
};

export default Nav;
