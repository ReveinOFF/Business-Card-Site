import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={t("meta.home.description")} />
        <meta name="keywords" content={t("meta.home.keywords")} />
      </Head>
      <div></div>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
