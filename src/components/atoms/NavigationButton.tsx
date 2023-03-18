import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import React from "react";
import { Button, useTheme } from "@mui/material";
import Link from "next/link";
import MobileNavButton from "./MobileNavButton";

interface NavigationButtonsProps {
  href: string;
  text: string;
  startIcon: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonsProps> = (props) => {
  const router = useRouter();

  const { pathname } = router;

  const isMobile = useIsMobile();

  const selected = React.useMemo(
    () => props.href === pathname,
    [pathname, props.href]
  );

  const theme = useTheme();

  return (
    <Link href={props.href} style={{ width: "100%" }}>
      {isMobile ? (
        <MobileNavButton
        selected={selected}
          startIcon={props.startIcon}
          theme={theme}
        >
          {props.text}
        </MobileNavButton>
      ) : (
        <Button variant="text">
          {props.text}
        </Button>
      )}
    </Link>
  );
};

export default NavigationButton;
