import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const GlobalStyles = dynamic(() => import("@/components/layout/GlobalStyles"));
const Layout = dynamic(() => import("@/components/layout/Layout"));


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
