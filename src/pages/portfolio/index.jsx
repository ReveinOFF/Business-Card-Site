import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.portfolio.title")}</title>
        <meta name="description" content={t("meta.portfolio.description")} />
        <meta name="keywords" content={t("meta.portfolio.keywords")} />
      </Head>
      <h1 className="text-center font-tthxb text-3xl tracking-wide my-3 text-red-700 sm:text-5xl">
        {t("portfolio")}
      </h1>
      <div className="mt-10 grid low_md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="h-full w-full shadow-white-center hover:scale-105 hover:shadow-white-hover [&_>div]:hover:-bottom-full [&_>div]:hover:-left-full [&_>h2]:hover:opacity-100 [&_>hgroup]:hover:opacity-100 [&_>div]:hover: transition-all relative overflow-hidden">
          <Image
            src="/images/noimg.png"
            width="600"
            height="600"
            alt="test"
            className="h-full w-full mx-auto object-cover"
            draggable={false}
          />
          <h2 className="opacity-0 absolute select-none top-[5%] left-[5%] z-10 font-tthxb max-w-60 border-2 p-3 h-full max-h-40 text-xl text-white transition-all delay-150">
            TSG SGSDGSDG SGSGSGS SGG
          </h2>
          <hgroup className="opacity-0 absolute select-none bottom-8 right-8 z-10 font-tthb border-b-[1px] pb-2 border-white text-base text-white transition-all delay-150">
            ИНТЕРНЕТ МАГАЗИН
          </hgroup>
          <div className="z-0 bottom-[5%] left-[5%] translate-x-[50%] translate-y-[-50%] bg-zinc-400 rotate-45 h-[150%] w-[150%] opacity-50 absolute transition-all delay-75 duration-300"></div>
          <div className="z-0 bottom-[5%] left-[5%] translate-x-[50%] translate-y-[-50%] bg-zinc-800 rotate-45 h-[150%] w-[150%] opacity-50 absolute transition-all delay-150 duration-300"></div>
          <div className="z-0 bottom-[5%] left-[5%] translate-x-[50%] translate-y-[-50%] bg-black rotate-45 h-[150%] w-[150%] opacity-80 absolute transition-all delay-200 duration-300"></div>
        </div>
      </div>
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
