import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
