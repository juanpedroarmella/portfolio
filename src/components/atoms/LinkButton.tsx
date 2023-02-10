import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Button = dynamic(() => import("@mui/material/Button"));

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <Link href={props.href}>
      <Button variant={"contained"}>{props.text}</Button>
    </Link>
  );
};

export default LinkButton;
