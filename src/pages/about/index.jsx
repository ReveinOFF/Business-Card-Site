import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import styles from "./aboutStyle.module.css";
import CustomButton from "@/components/button/button";
import Link from "next/link";

export default function About() {
  const { t } = useTranslation();

  const age = useMemo(() => {
    var date = new Date("2003-01-31").getTime();
    var ageDifMs = Date.now() - date;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }, []);

  return (
    <>
      <Head>
        <title>{t("meta.about.title")}</title>
        <meta name="description" content={t("meta.about.description")} />
        <meta name="keywords" content={t("meta.about.keywords")} />
      </Head>
      <h1 className="title">ABOUT ME</h1>
      <h2 className="opensans font-bold text-2xl mb-3">
        I'm Roman Pomianovskiy and{" "}
        <span className="text-red-500">Web Developer</span>
      </h2>
      <p className="opensans text-balance mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        molestiae unde ipsa dignissimos repellendus distinctio in delectus.
        Error, architecto quis! Atque delectus ipsum molestias laborum tenetur
        repudiandae eaque, deserunt aliquid?
      </p>
      <div className="grid grid-cols-2 gap-10 max-w-2xl opensans mb-10">
        <div className={styles.table_col}>
          <span className="font-bold">Birthday:</span> 31.01.2003
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">Age:</span> {age}
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">Country:</span> Ukarine
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">City:</span> Rivne
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">Phone:</span> +380977852315
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">Email:</span> ronnieplayyt@gmail.com
        </div>
      </div>
      <div className="flex gap-10">
        <CustomButton>Download CV</CustomButton>
        <Link href="/contacts#form">
          <CustomButton>Hire Me</CustomButton>
        </Link>
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
