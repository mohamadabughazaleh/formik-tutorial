import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Translationen from "../src/local/en.json";
import Translationar from "../src/local/ar.json";

const resources = {
  en: {
    translation: Translationen,
  },
  ar: {
    translation: Translationar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
