import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import styles from "./footerStyle.module.css";

export default function Footer() {
  const { t } = useTranslation();

  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer>
      <div className="p-5 hidden min_sm:flex bg-zinc-800 flex-col items-center">
        <h1 className="mb-3 select-none text-2xl font-tthxb [&_>span]:text-red-500 overline decoration-red-500">
          <span>_</span>REVEIN<span>_</span>OFF<span>_</span>
        </h1>
        <div className="text-center max-w-4xl mb-3 text opensans">
          {t("footer.top")}
        </div>
        <div className="flex">
          <Link
            href="https://github.com/ReveinOFF"
            target="_blank"
            className={`mr-3 ${styles.svg}`}
          >
            <Image
              src="/images/footer/github.svg"
              width="40"
              height="40"
              alt="github"
              draggable={false}
            />
          </Link>
          <Link
            href="https://www.instagram.com/romatop007/"
            target="_blank"
            className={`mr-3 ${styles.svg}`}
          >
            <Image
              src="/images/footer/instagram.svg"
              width="40"
              height="40"
              alt="instagram"
              draggable={false}
            />
          </Link>
          <Link
            href="mailto:reveinoff@gmail.com"
            target="_blank"
            className={styles.svg}
          >
            <Image
              src="/images/footer/gmail.svg"
              width="40"
              height="40"
              alt="gmail"
              draggable={false}
            />
          </Link>
        </div>
      </div>
      <div className="p-5 flex justify-center sm:justify-between bg-zinc-900 my-0 opensans">
        <div>
          &#169; {year} ReveinOFF, {t("footer.bottom")}
        </div>
        <div className="hidden sm:block">
          <Link className={styles.footer_pages} href="/">
            {t("header.home")}
          </Link>
          <Link className={styles.footer_pages} href="/about">
            {t("header.about")}
          </Link>
          <Link className={styles.footer_pages} href="/contacts">
            {t("header.contacts")}
          </Link>
          <Link className={styles.footer_pages} href="/portfolio">
            {t("header.portfolio")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
