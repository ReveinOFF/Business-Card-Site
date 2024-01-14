import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Loading from "./loading";

export const ScrollContext = createContext();

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setIsScroll(false);
    };

    const handleComplete = () => {
      setLoading(false);
      setIsScroll(true);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <ScrollContext.Provider value={setIsScroll}>
      {loading && <Loading />}
      <div
        className={`${
          isScroll ? "overflow-auto" : "overflow-hidden"
        } h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        {router.pathname !== "/404" && <Header />}
        <main className="mx-5">
          <Component {...pageProps} />
        </main>
        {router.pathname !== "/404" && <Footer />}
      </div>
    </ScrollContext.Provider>
  );
}

export default appWithTranslation(App);
