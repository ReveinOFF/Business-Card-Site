import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  return (
    <Html lang={props.locale} className="dark">
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-zinc-950 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
