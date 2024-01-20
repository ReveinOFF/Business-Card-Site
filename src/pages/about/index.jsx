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
      <div className="flex gap-10 mb-10">
        <CustomButton>Download CV</CustomButton>
        <Link href="/contacts#form">
          <CustomButton>Hire Me</CustomButton>
        </Link>
      </div>
      <div className="flex justify-around gap-10 mb-10">
        <div className="w-1/2">
          <h3 className={`${styles.info_t} opensans`}>Education</h3>
          <div className={styles.info_d}>
            <div className="[&_>div:not(:last-of-type)]:pb-5 h-full overflow-y-auto pr-3 py-px">
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
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
          <h3 className={`${styles.info_t} opensans`}>Experience</h3>
          <div className={styles.info_d}>
            <div className="[&_>div:not(:last-of-type)]:pb-5 h-full overflow-y-auto pr-3 py-px">
              <div className="pl-10 opensans before:h-full before:left-[9px] before:absolute relative before:bg-red-600 before:w-0.5 before:rounded-lg before:content-['']">
                <div className="w-5 h-5 rounded-full bg-red-600 absolute left-0 -top-px"></div>
                <div className="mb-3 flex items-center">
                  <Image
                    src="/images/about/calendar.svg"
                    width="15"
                    height="15"
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
        <h3 className={`${styles.info_t} opensans`}>Skills</h3>
        <table>
          <thead>
            <tr>
              <th>Language IT/Technologi</th>
              <th>Frameworks/Library</th>
              <th>Database</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C#/.NET</td>
              <td>React JS</td>
              <td>MSSQL</td>
            </tr>
            <tr>
              <td>JS/TS/Ajax/jQuery</td>
              <td>Angular</td>
              <td>MySQL/PhpMyAdmin</td>
            </tr>
            <tr>
              <td>DHTML/HTML</td>
              <td>Next JS</td>
              <td>PostgreSQL</td>
            </tr>
            <tr>
              <td>CSS/SCSS/SASS</td>
              <td>Node JS</td>
              <td>MongoDG</td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>Bootstrap/Tailwind</td>
            </tr>
            <tr>
              <td></td>
              <td>Gulp</td>
            </tr>
            <tr>
              <td></td>
              <td>Entity Framework/Core</td>
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
