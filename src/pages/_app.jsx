import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { createContext, useState } from "react";

export const ScrollContext = createContext();

function App({ Component, pageProps }) {
  const [isScroll, setIsScroll] = useState(true);
  const router = useRouter();

  return (
    <ScrollContext.Provider value={setIsScroll}>
      <div
        className={`${
          isScroll ? "overflow-auto" : "overflow-hidden"
        } h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        {router.pathname !== "/404" && <Header />}
        <main className="bg-zinc-700 mx-5">
          <Component {...pageProps} />
        </main>
        {router.pathname !== "/404" && <Footer />}
      </div>
    </ScrollContext.Provider>
  );
}

export default appWithTranslation(App);
