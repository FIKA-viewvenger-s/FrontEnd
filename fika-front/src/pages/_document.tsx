import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ko">
        <Head>{/* <link href="/favicon.ico" rel="icon" /> */}</Head>
        <body>
          <Main />
          <NextScript />
          <Script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=80f99da87ad2134acd10a7c7fc4d565d&libraries=services,clusterer&autoload=false"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default Document;
