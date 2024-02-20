import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { createContext, useEffect, useRef, useState } from "react";
import Loading from "./loading";
import { OpenSans, TTHovesB, TTHovesXB } from "@/utils/fonts";
import Image from "next/image";

export const ScrollContext = createContext();

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(true);
  const [loading, setLoading] = useState(false);
  const refDiv = useRef();
  const [scrollTop, setScrollTop] = useState(refDiv?.current?.scrollTop || 0);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setIsScroll(false);
    };

    const handleComplete = () => {
      refDiv.current.scrollTop = 0;
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
        ref={refDiv}
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
        className={`${isScroll ? "overflow-auto" : "overflow-hidden"} ${
          TTHovesB.variable
        } ${TTHovesXB.variable} ${
          OpenSans.variable
        } h-screen grid grid-rows-[auto_1fr_auto] scroll-smooth`}
      >
        {router.pathname !== "/404" && <Header />}
        <main className="mx-5">
          <Component {...pageProps} />
        </main>
        {router.pathname !== "/404" && <Footer />}
      </div>
      <button
        className={`fixed bottom-16 right-10 p-4 leading-relaxed rounded-lg border-[3px] hover:border-red-600 bg-zinc-700 transition-all ${
          scrollTop > 200 ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => (refDiv.current.scrollTop = 0)}
      >
        <Image
          src="/images/header/arrow.svg"
          width="15"
          height="15"
          alt="arrow"
          className="ml-auto transition-all"
        />
      </button>
    </ScrollContext.Provider>
  );
}

export default appWithTranslation(App);
