import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.notfound.title")}</title>
        <meta name="description" content={t("meta.notfound.description")} />
        <meta name="keywords" content={t("meta.notfound.keywords")} />
      </Head>
      <h1>404 - Page Not Found</h1>
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
