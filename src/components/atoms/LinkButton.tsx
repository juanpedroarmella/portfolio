import { ButtonProps, SxProps } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Button = dynamic(() => import("@mui/material/Button"));

interface LinkButtonProps {
  href: string;
  text: string;
  buttonProps?: ButtonProps & SxProps;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <Link href={props.href}>
      <Button {...props.buttonProps}>{props.text}</Button>
    </Link>
  );
};

export default LinkButton;
