// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
i18n
  .use(useTranslation)
  .init({
    resources: {
      en: {
        translation: {
          'Hello': 'Hello',
          'Welcome': 'Welcome to our app',
          // Add more translations for English
        },
      },
      fr: {
        translation: {
          'Hello': 'Bonjour',
          'Welcome': 'Bienvenue dans notre application',
          // Add more translations for French
        },
      },
      // Add more languages and translations as needed
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language in case a translation is missing
  });

export default i18n;