import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files directly
import ruTranslation from './public/locales/ru/translation.json';
import uzTranslation from './public/locales/uz/translation.json';
import enTranslation from './public/locales/en/translation.json';
import arTranslation from './public/locales/ar/translation.json';
import zhTranslation from './public/locales/zh/translation.json';

const resources = {
  ru: {
    translation: ruTranslation
  },
  uz: {
    translation: uzTranslation
  },
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  },
  zh: {
    translation: zhTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // default language
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // This prevents suspense issues
    }
  });

export default i18n;