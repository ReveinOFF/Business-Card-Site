import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "./contactsStyle.module.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.contacts.title")}</title>
        <meta name="description" content={t("meta.contacts.description")} />
        <meta name="keywords" content={t("meta.contacts.keywords")} />
      </Head>
      <h1 className="text-center font-tthxb text-5xl tracking-wide my-3 text-red-700">
        CONTACTS
      </h1>
      <p className="text-center opensans text-lg font-bold tracking-2 mb-10">
        I'M AT YOUR SERVICES
      </p>
      <div className="flex justify-evenly text-center opensans items-end">
        <div>
          <Image
            src="/images/contacts/call.svg"
            width="30"
            height="30"
            alt="call"
            className="mx-auto mb-2"
          />
          <div className="font-bold">Call Me On</div>
          <div>+380977852315</div>
        </div>
        <div>
          <Image
            src="/images/contacts/point.svg"
            width="30"
            height="30"
            alt="point"
            className="mx-auto mb-2"
          />
          <div className="font-bold">Living</div>
          <div>Ukraine</div>
        </div>
        <div>
          <Image
            src="/images/contacts/email.svg"
            width="30"
            height="30"
            alt="email"
            className="mx-auto mb-2"
          />
          <div className="font-bold">Email</div>
          <div>ronnieplayyt@gmail.com</div>
        </div>
        <div>
          <Image
            src="/images/contacts/globe.svg"
            width="30"
            height="30"
            alt="globe"
            className="mx-auto mb-2"
          />
          <div className="font-bold">Website</div>
          <div>www.revie.com</div>
        </div>
      </div>
      <h2 className="text-center font-tthxb text-3xl tracking-wide mt-10 mb-3 text-red-700">
        SEND ME AN EMAIL
      </h2>
      <p className="text-center opensans text-lg font-bold tracking-2 mb-5">
        I'M VERY RESPONSIVE TO MESSAGES
      </p>
      <form className="flex flex-col max-w-5xl mx-auto opensans">
        <div className="flex justify-between my-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`w-full mr-4 rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full ml-4 rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={`rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 my-5 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
        />
        <textarea
          name="message"
          placeholder="Message"
          className={`rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 my-5 resize-none focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
        />
        <button className="bg-red-600 rounded-xl p-2 font-bold max-w-60 hover:shadow-red-center">
          Send message
        </button>
      </form>
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
