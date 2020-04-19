import "../assets/styles.css";
import Header from "../components/Header";

const CustomApp = ({ Component, pageProps }) => {
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
      <Header />
      <Component {...pageProps} />
    </>
  );
};

CustomApp.getInitialProps = async ({ AppTree, Component, ctx, router }) => {
  return {
    someProp: true,
  };
};

export default CustomApp;
