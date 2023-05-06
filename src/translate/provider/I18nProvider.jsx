import { createContext, useContext, useState } from 'react';
import { AppIntlProvider } from './IntlProvider';
import { getLang } from '../lib/storage';

const initialState = {
  selectedLang: getLang(),
  setLang: (lang) => {},
};

const I18nContext = createContext(initialState);
export const I18nProvider = ({ children }) => {
  const [selectedLang, setLang] = useState(initialState.selectedLang);
  return (
    <I18nContext.Provider value={{ selectedLang, setLang }}>
      <AppIntlProvider>
           {children}
      </AppIntlProvider>
    </I18nContext.Provider>
  );
};
export const useLang = () => useContext(I18nContext);