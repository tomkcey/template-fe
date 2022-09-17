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
        <title>Ui-Kit</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
});
