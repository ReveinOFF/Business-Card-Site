import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  const title = `Revie - ${t("meta.portfolio.title")}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={t("meta.portfolio.description")} />
        <meta name="keywords" content={t("meta.portfolio.keywords")} />
      </Head>
      <div></div>
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
