import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className=" bg-zinc-950 text-white scroll-smooth px-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
