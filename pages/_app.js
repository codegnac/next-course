import Head from "next/head";
import "../assets/styles.css";
import Header from "../components/Header";

export default ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Head>
        <title>Default title</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
