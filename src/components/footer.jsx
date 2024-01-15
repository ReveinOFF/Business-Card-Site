import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();

  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer>
      <div className="footer hidden sm:flex mt-5 bg-zinc-800 flex-col items-center">
        <h1 className="mb-3 text-2xl font-tthxb">REVIE</h1>
        <div className="text-center max-w-4xl mb-3 text font-sans tracking-wider">
          {t("footer.top")}
        </div>
        <div className="flex">
          <Link
            href="https://github.com/RonniePlay"
            target="_blank"
            className="mr-3 svg"
          >
            <Image
              src="/images/footer/github.svg"
              width="40"
              height="40"
              alt="github"
            />
          </Link>
          <Link
            href="https://www.instagram.com/romatop007/"
            target="_blank"
            className="mr-3 svg"
          >
            <Image
              src="/images/footer/instagram.svg"
              width="40"
              height="40"
              alt="instagram"
            />
          </Link>
          <Link
            href="mailto:ronnieplayyt@gmail.com"
            target="_blank"
            className="svg"
          >
            <Image
              src="/images/footer/gmail.svg"
              width="40"
              height="40"
              alt="gmail"
            />
          </Link>
        </div>
      </div>
      <div className="footer flex justify-center sm:justify-between bg-zinc-900 my-0 font-sans tracking-wider">
        <div>
          &#169; {year} Revie, {t("footer.bottom")}
        </div>
        <div className="hidden sm:block">
          <Link className="footer-pages" href="/">
            {t("header.home")}
          </Link>
          <Link className="footer-pages" href="/about">
            {t("header.about")}
          </Link>
          <Link className="footer-pages" href="/contacts">
            {t("header.contacts")}
          </Link>
          <Link className="hover:text-red-500" href="/portfolio">
            {t("header.portfolio")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
