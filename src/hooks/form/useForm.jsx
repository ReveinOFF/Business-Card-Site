import { useState } from "react";
import { useTranslation } from "next-i18next";

const data = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function useForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState(data);
  const [submited, setSubmited] = useState(false);
  const [time, setTime] = useState();

  const checkValue = () => {
    return Object.values(values).some((value) => value === "");
  };

  const validate = (name, value) => {
    if (name === "name") {
      if (value.length < 1) {
        setErrors({
          ...errors,
          [name]: t("validation.low"),
        });
      }
      if (value.length > 20) {
        setErrors({
          ...errors,
          [name]: t("validation.name_hig"),
        });
      }
    }

    if (name === "email") {
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: t("validation.email"),
        });
      }
    }

    if (name === "subject") {
      if (value.length < 1) {
        setErrors({
          ...errors,
          [name]: t("validation.low"),
        });
      }
      if (value.length > 20) {
        setErrors({
          ...errors,
          [name]: t("validation.subject_hig"),
        });
      }
    }

    if (name === "message") {
      if (value.length < 1) {
        setErrors({
          ...errors,
          [name]: t("validation.low"),
        });
      }
      if (value.length > 150) {
        setErrors({
          ...errors,
          [name]: t("validation.message_hig"),
        });
      }
    }
  };

  const handleChange = (event) => {
    checkValue();
    clearTimeout(time);

    let name = event.target.name;
    let val = event.target.value;

    if (submited) setSubmited(false);

    setErrors({
      ...errors,
      [name]: "",
    });

    setValues({
      ...values,
      [name]: val,
    });

    setTime(setTimeout(() => validate(name, val), 1000));
  };

  return { values, errors, submited, checkValue, handleChange, setSubmited };
}
