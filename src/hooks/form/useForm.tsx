import { useState } from "react";
import { useTranslation } from "next-i18next";
import { EmailData } from "@/utils/interfaces";

export default function useForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<EmailData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<EmailData>({
    name: t("validation.low"),
    email: t("validation.low"),
    subject: t("validation.low"),
    message: t("validation.low"),
  });
  const [submited, setSubmited] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validate = (name: string, value: string) => {
    if (name === "name") {
      if (value.length < 1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.low"),
        }));
      }
      if (value.length > 20) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.name_hig"),
        }));
      }
    }

    if (name === "email") {
      if (value.length < 1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.low"),
        }));
      }
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.email"),
        }));
      }
    }

    if (name === "subject") {
      if (value.length < 1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.low"),
        }));
      }
      if (value.length > 20) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.subject_hig"),
        }));
      }
    }

    if (name === "message") {
      if (value.length < 1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.low"),
        }));
      }
      if (value.length > 150) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: t("validation.message_hig"),
        }));
      }
    }
  };

  const handleChange = (event: any) => {
    let name = event.target.name;
    let val = event.target.value;

    setErrors((prevValues) => ({
      ...prevValues,
      [name]: null,
    }));

    setValues((prevValues) => ({
      ...prevValues,
      [name]: val,
    }));

    validate(name, val);
    setIsValid(!Object.values(errors).some((value) => value !== null));
  };

  return {
    values,
    errors,
    submited,
    isValid,
    handleChange,
    setSubmited,
  };
}
