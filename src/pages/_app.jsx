import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { appWithTranslation, i18n } from "next-i18next";
import { getLanguageFromLocalStorage } from "@/utils/translations";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, query } = router;

  useEffect(() => {
    const savedLanguage = getLanguageFromLocalStorage();
    document.documentElement.lang = savedLanguage;
    router.push({ pathname, query }, undefined, {
      locale: savedLanguage,
    });
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="bg-zinc-700 mx-5">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
