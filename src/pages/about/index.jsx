import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import styles from "./aboutStyle.module.css";
import CustomButton from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

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
      <h1 className="title">{t("about.title")}</h1>
      <h2 className="opensans font-bold text-2xl mb-3">
        {t("about.desc_top")}{" "}
        <span className="text-red-500">{t("about.desc_top2")}</span>
      </h2>
      <p className="opensans text-balance mb-10 max-w-2xl">
        {t("about.desc_bot")}
      </p>
      <div className="grid grid-cols-2 gap-10 max-w-2xl opensans mb-10">
        <div className={styles.table_col}>
          <span className="font-bold">{t("about.me_birth")}</span> 31.01.2003
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">{t("about.me_age")}</span> {age}
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">{t("about.me_country")}</span>{" "}
          {t("about.country")}
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">{t("about.me_city")}</span>{" "}
          {t("about.city")}
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">{t("about.me_phone")}</span> +380681369836
        </div>
        <div className={styles.table_col}>
          <span className="font-bold">Email:</span> reveinoff@gmail.com
        </div>
      </div>
      <div className="flex gap-10 mb-10">
        <CustomButton>{t("about.dwnl")}</CustomButton>
        <Link href="/contacts#form">
          <CustomButton>{t("about.hire")}</CustomButton>
        </Link>
      </div>
      <div className="flex justify-around gap-10 mb-10">
        <div className="w-1/2">
          <h3 className={`${styles.info_t} opensans`}>{t("about.info_1")}</h3>
          <div className={styles.info_d}>
            <div className="[&_>div:not(:last-of-type)]:pb-5 h-full overflow-y-auto pr-3 py-px">
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
                    alt="calendar"
                    className="mr-2"
                  />
                  2013 - 2015
                </div>
                <div className="font-bold">Master In Computer Science</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  soluta quidem fugit corporis explicabo minima libero quis aut
                  deserunt atque eius laudantium rem, pariatur, magni, nostrum
                  consectetur ipsum iusto fugiat.
                </div>
              </div>
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
                    alt="calendar"
                    className="mr-2"
                  />
                  2013 - 2015
                </div>
                <div className="font-bold">Master In Computer Science</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  soluta quidem fugit corporis explicabo minima libero quis aut
                  deserunt atque eius laudantium rem, pariatur, magni, nostrum
                  consectetur ipsum iusto fugiat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className={`${styles.info_t} opensans`}>{t("about.info_2")}</h3>
          <div className={styles.info_d}>
            <div className="[&_>div:not(:last-of-type)]:pb-5 h-full overflow-y-auto pr-3 py-px">
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
                    alt="calendar"
                    className="mr-2"
                  />
                  2013 - 2015
                </div>
                <div className="font-bold">Master In Computer Science</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  soluta quidem fugit corporis explicabo minima libero quis aut
                  deserunt atque eius laudantium rem, pariatur, magni, nostrum
                  consectetur ipsum iusto fugiat.
                </div>
              </div>
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
                    alt="calendar"
                    className="mr-2"
                  />
                  2013 - 2015
                </div>
                <div className="font-bold">Master In Computer Science</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  soluta quidem fugit corporis explicabo minima libero quis aut
                  deserunt atque eius laudantium rem, pariatur, magni, nostrum
                  consectetur ipsum iusto fugiat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className={`${styles.info_t} opensans text-center`}>
          {t("about.info_3")}
        </h3>
        <table className="w-full opensans">
          <thead>
            <tr className="[&_>th]:text-lg [&_>th]:pb-5 [&_>th]:text-red-600 border-b-2 border-gray-600">
              <th>{t("about.info_3_l")}</th>
              <th>{t("about.info_3_r")}</th>
            </tr>
          </thead>
          <tbody className="[&_>tr]:text-center [&_>tr:not(:last-child)]:border-b-2 [&_>tr]:border-gray-600 [&_>tr>td]:pb-5 [&_>tr>td]:pt-7">
            <tr>
              <td>React JS</td>
              <td>C# / EntityFramework(Core)</td>
            </tr>
            <tr>
              <td>JS / TS / Ajax / jQuery</td>
              <td>MSSQL</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>MySQL / PhpMyAdmin</td>
            </tr>
            <tr>
              <td>Next JS</td>
              <td>Node JS</td>
            </tr>
            <tr>
              <td>CSS / SCSS / SASS</td>
              <td>PostgreSQL</td>
            </tr>
            <tr>
              <td>Bootstrap / Tailwind</td>
              <td>MongoDB</td>
            </tr>
            <tr>
              <td>WordPress</td>
              <td>PHP</td>
            </tr>
            <tr>
              <td>Gulp</td>
              <td>...</td>
            </tr>
            <tr>
              <td>HTML / DHTML</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
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
