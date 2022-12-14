import { useFormik } from "formik";
import { basicschema } from "../shcemas/index";
// import Alert from "@mui/material/Alert";
import { notify, error } from "../notify/Notfiy";
import Switch from "@mui/material/Switch";
// import TextField from "@mui/material/TextField";
import React, { useRef, useState, useEffect } from "react";
// import Image from "./Image";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
const BasicForm = () => {
  const { t, i18n } = useTranslation();
  const Form = useRef();
  const image = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const Arr = ["ONE", "TOW", "three"];
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    errors,
    resetForm,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      Date: "",
      accept: false,
    },
    validationSchema: basicschema,
    onSubmit: () => {
      fetch("https://task.wethemakers.dev/webhook/ivvest-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          age: values.age,
          password: values.password,
          Date: values.Date,
          accept: values.accept,
        }),
      })
        .then((date) => date.json())
        .then((res) => {
          console.log("date", res);
          if (res) resetForm();
          notify();
        })
        .then(() => {
          emailjs
            .sendForm(
              "service_kol1lii",
              "template_ful1eaf",
              Form.current,
              "6MAT8F0Mlo-yjbaKJ"
            )
            .then(
              (result) => {
                console.log("massgesent", result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        })
        .catch(() => error());
    },
  });
  const handlePointsAnimation = () => {
    setActiveIndex((activeIndex + 1) % Arr.length === 0 ? 0 : activeIndex + 1);
    console.log(activeIndex);
  };
  useEffect(() => {
    const interval = setInterval(handlePointsAnimation, 4000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <form ref={Form} onSubmit={handleSubmit} autoComplete="off">
        <label
          style={{ textAlign: i18n.language === "en" ? "left" : "right" }}
          htmlFor="email"
        >
          {t("Email")}
        </label>
        <input
          name="email"
          type="email"
          className={errors.email && touched.email ? "input-error" : ""}
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email &&
          touched.email &&
          {
            /* <Alert severity="success">{errors.email}</Alert> */
          }}
        <label
          style={{ textAlign: i18n.language === "en" ? "left" : "right" }}
          htmlFor="age"
        >
          {t("age")}
        </label>
        <input
          name="age"
          type="number"
          className={errors.age && touched.age ? "input-error" : ""}
          value={values.age}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        {errors.age && touched.age && <p className={"erroe"}>{errors.age}</p>}
        <label
          style={{ textAlign: i18n.language === "en" ? "left" : "right" }}
          htmlFor="password"
        >
          {t("password")}
        </label>
        <input
          name="password"
          type="password"
          className={errors.password ? "input-error" : ""}
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && touched.password && (
          <p className={"erroe"}>{errors.password}</p>
        )}
        {/* <input name="img" type="file" ref={image} /> */}

        <Switch
          name="accept"
          onChange={handleChange}
          value={values.accept}
          defaultChecked={values.accept}
        />

        <button
          disabled={isSubmitting}
          className={isSubmitting ? "butoon-disabled" : ""}
          type="submit"
        >
          {t("Submit")}
        </button>
      </form>
      {/* <Image /> */}
      {Arr.map((item, index) => {
        return (
          <div>
            <h1
              ref={image}
              key={index}
              className={index === activeIndex ? "color" : ""}
            >
              {item}
            </h1>
          </div>
        );
      })}
    </>
  );
};
export default BasicForm;
