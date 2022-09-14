import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VasuDevrani</title>
        <meta name='description' content="Hey I'm Vasu Devrani. This portfolio would let you know more about me."/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
