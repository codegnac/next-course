import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Page description goes here!" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <footer>I am a footer</footer>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => {
    originalRenderPage({
      enhanceApp: (App) => <App />,
    });
  };
  return {
    ...initialProps,
  };
};

export default MyDocument;
