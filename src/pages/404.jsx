import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
