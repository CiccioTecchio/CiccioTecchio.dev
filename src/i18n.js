import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationIT from './locales/it/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
 };
 

i18n
  // Enables the i18next backend
  .use(Backend)
  // Enable automatic language detection
  .use(LanguageDetector)
  // Enables the hook initialization module
  .use (initReactI18next)
  .init({
    // Standard language used
    fallbackLng: 'it',
    debug: false,
    resources,
    //Detects and caches a cookie from the language provided
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;
