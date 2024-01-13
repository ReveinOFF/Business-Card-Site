import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation, i18n } from "next-i18next";
import { useRouter } from "next/router.js";

export default function Header() {
  const [showLng, setShowLng] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname, query } = router;

  const changeShowLng = (e) => {
    if (!e.target.closest(".c-lng")) setShowLng(false);
  };

  useEffect(() => {
    if (showLng) {
      document.addEventListener("click", changeShowLng);
    } else {
      document.removeEventListener("click", changeShowLng);
    }

    return () => {
      document.removeEventListener("click", changeShowLng);
    };
  }, [showLng]);

  return (
    <header className="sticky bg-zinc-950 bg-opacity-70 top-3 flex items-center justify-between px-10 py-5 mx-5 border-2 border-red-700 rounded-lg my-5">
      <Link href="/" className="focus:outline-none">
        <Image src="/images/avatar.png" alt="avatar" width="50" height="50" />
      </Link>
      <nav className="hidden md:block">
        <Link
          className={`page-select ${
            pathname == "/" ? "text-red-700" : "hover:text-red-500"
          }`}
          href="/"
        >
          {t("header.home").toLocaleUpperCase()}
        </Link>
        <Link
          className={`page-select ${
            pathname == "/portfolio" ? "text-red-700" : "hover:text-red-500"
          }`}
          href="/portfolio"
        >
          {t("header.portfolio").toLocaleUpperCase()}
        </Link>
        <Link
          className={`page-select ${
            pathname == "/about" ? "text-red-700" : "hover:text-red-500"
          }`}
          href="/about"
        >
          {t("header.about").toLocaleUpperCase()}
        </Link>
        <Link
          className={`page-select ${
            pathname == "/contact" ? "text-red-700" : "hover:text-red-500"
          }`}
          href="/contacts"
        >
          {t("header.contacts").toLocaleUpperCase()}
        </Link>
      </nav>
      <div className="relative hidden md:block">
        <button
          className={`c-lng border-2 px-3 py-1 rounded-lg pb-1.5 transition duration-200 ${
            showLng
              ? "border-red-700 shadow-red-center"
              : "hover:border-red-500 hover:shadow-red-center"
          }`}
          onClick={() => setShowLng(!showLng)}
        >
          {router.locale.toLocaleUpperCase()}
        </button>
        <div
          className={`c-lng border-2 rounded-lg absolute mt-2 bg-black transition duration-200 ${
            showLng
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1/3 pointer-events-none"
          }`}
        >
          {router.locales
            .filter((item) => item !== router.locale)
            .map((item, index) => (
              <button
                onClick={() => {
                  router.push({ pathname, query }, undefined, {
                    locale: item,
                  });
                  i18n.changeLanguage(item);
                  setShowLng(false);
                }}
                key={index}
                className="c-lng lang-select"
              >
                {item.toLocaleUpperCase()}
              </button>
            ))}
        </div>
      </div>
      <div className="md:hidden" onClick={() => setShowBurger(true)}>
        <div className="relative w-7 bg-white h-0.5 rounded-lg after:content-[''] after:absolute after:rounded-lg after:top-2 after:w-full after:h-0.5 after:bg-white before:content-[''] before:absolute before:rounded-lg before:bottom-2 before:w-full before:h-0.5 before:bg-white"></div>
      </div>
    </header>
  );
}
