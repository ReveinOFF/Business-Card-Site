import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.portfolio.title")}</title>
        <meta name="description" content={t("meta.portfolio.description")} />
        <meta name="keywords" content={t("meta.portfolio.keywords")} />
      </Head>
      <h1 className="title">PORTFOLIO</h1>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
