import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "./contactsStyle.module.css";
import useForm from "@/hooks/form/useForm";
import CustomButton from "@/components/button/button";

export default function Contact() {
  const { t } = useTranslation();
  const { values, errors, submited, checkValue, handleChange, setSubmited } =
    useForm();

  const handleSubmite = (e) => {
    e.preventDefault();
    setSubmited(true);
    if (!checkValue()) {
      console.log("done");
    }
  };

  return (
    <>
      <Head>
        <title>{t("meta.contacts.title")}</title>
        <meta name="description" content={t("meta.contacts.description")} />
        <meta name="keywords" content={t("meta.contacts.keywords")} />
      </Head>
      <h1 className="title">{t("contacts.title")}</h1>
      <p className="p mb-10">{t("contacts.description")}</p>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 sm:gap-0 sm:flex sm:justify-evenly min_sm:grid-rows-2 min_sm:grid-cols-2 text-center opensans items-end">
        <div>
          <Image
            src="/images/contacts/call.svg"
            width="30"
            height="30"
            alt="call"
            className="mx-auto mb-2"
            draggable={false}
          />
          <div className="font-bold">{t("contacts.call")}</div>
          <div>+380681369836</div>
        </div>
        <div>
          <Image
            src="/images/contacts/globe.svg"
            width="30"
            height="30"
            alt="globe"
            className="mx-auto mb-2"
            draggable={false}
          />
          <div className="font-bold">{t("contacts.website")}</div>
          <div>www.reveinoff.com</div>
        </div>
        <div>
          <Image
            src="/images/contacts/email.svg"
            width="30"
            height="30"
            alt="email"
            className="mx-auto mb-2"
            draggable={false}
          />
          <div className="font-bold">{t("contacts.email")}</div>
          <div>reveinoff@gmail.com</div>
        </div>
        <div>
          <Image
            src="/images/contacts/point.svg"
            width="30"
            height="30"
            alt="point"
            className="mx-auto mb-2"
            draggable={false}
          />
          <div className="font-bold">{t("contacts.living")}</div>
          <div>{t("contacts.country")}</div>
        </div>
      </div>
      <h2 id="form" className="subtitle">
        {t("contacts.title2")}
      </h2>
      <p className="p mb-5">{t("contacts.description2")}</p>
      <form
        className="flex flex-col max-w-5xl mx-auto opensans"
        onSubmit={handleSubmite}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between mt-5">
          <div className="w-full mr-4">
            <input
              type="text"
              name="name"
              placeholder={t("contacts.name")}
              onChange={handleChange}
              className={`w-full rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
            />
            {submited && errors.name && (
              <p className="text-red-500 mb-2 ml-3">{errors.name}</p>
            )}
          </div>
          <div className="w-full mt-5 sm:ml-4 sm:mt-0">
            <input
              type="email"
              name="email"
              placeholder={t("contacts.email")}
              onChange={handleChange}
              className={`w-full rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
            />
            {submited && errors.email && (
              <p className="text-red-500 mb-2 ml-3">{errors.email}</p>
            )}
          </div>
        </div>
        <input
          type="text"
          name="subject"
          placeholder={t("contacts.subject")}
          onChange={handleChange}
          className={`rounded-xl p-2 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 mt-5 focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
        />
        {submited && errors.subject && (
          <p className="text-red-500 mb-2 ml-3">{errors.subject}</p>
        )}
        <textarea
          name="message"
          placeholder={t("contacts.message")}
          onChange={handleChange}
          className={`rounded-xl p-2 h-40 text-white placeholder:text-white bg-zinc-800 border-2 border-zinc-400 mt-5 resize-none focus:border-red-600 focus:outline-none ${styles.auto_fill}`}
        />
        <p className="mb-2 ml-3">{values.message.length}/150</p>
        {submited && errors.message && (
          <p className="text-red-500 mb-2 ml-3">{errors.message}</p>
        )}
        <CustomButton className="mx-auto sm:ml-0">
          {t("contacts.btn")}
        </CustomButton>
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
