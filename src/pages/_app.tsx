import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const GlobalStyles = dynamic(() => import("@/components/layout/GlobalStyles"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
