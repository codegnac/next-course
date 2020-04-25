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

export default MyDocument;
