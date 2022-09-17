import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default appWithTranslation(function App({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Template FE</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
});
