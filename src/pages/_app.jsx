import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      {router.pathname !== "/404" && <Header />}
      <main className="bg-zinc-700 mx-5">
        <Component {...pageProps} />
      </main>
      {router.pathname !== "/404" && <Footer />}
    </div>
  );
}

export default appWithTranslation(App);
