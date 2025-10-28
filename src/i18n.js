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

// Get saved language from localStorage or use default
const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('selected-language');
  if (savedLanguage && resources[savedLanguage]) {
    return savedLanguage;
  }
  return 'ru'; // default language
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(), // Use saved language or default
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;