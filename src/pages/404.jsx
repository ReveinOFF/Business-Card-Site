import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const Montserrat = localFont({
  src: "../../public/fonts/Montserrat/Montserrat-ExtraBold.woff2",
  display: "swap",
});

export default function NotFound() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t("meta.notfound.title")}</title>
        <meta name="description" content={t("meta.notfound.description")} />
        <meta name="keywords" content={t("meta.notfound.keywords")} />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1
          className={`text-mega-size text-transparent tracking-low font-bold outlined-text text-zinc-950 text-center ${Montserrat.className}`}
        >
          404
        </h1>
        <h2
          className={`text-5xl absolute text-nowrap tracking-2 top-1/2 left-1/2 -translate-x-1/2 font-bold ${Montserrat.className}`}
        >
          PAGE NOT FOUND
        </h2>
        <button
          onClick={() => router.back()}
          className="border-2 border-red-600 hover:text-red-300 hover:border-red-300 transition-colors font-bold text-red-600 py-2 px-6"
        >
          GO BACK
        </button>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
