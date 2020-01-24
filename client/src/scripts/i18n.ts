import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextXHRNBackend from 'i18next-xhr-backend';

function init(): void {
  i18next
    .use(i18nextXHRNBackend)
    .use(initReactI18next)
    .init({
      backend: {
        loadPath: '/locale/{{lng}}{{ns}}.json',
        allowMultiLoading: false,
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      fallbackLng: 'en',
      lng: 'en',
      defaultNS: '',
      ns: '',
    });
}

export default { init };
