import { IntlProvider } from 'react-intl';
import { useMemo } from 'react';
import frMessagge from '../messages/fr.json';
import enMessagge from '../messages/en.json';
import { useLang } from './I18nProvider';

const allMessage = {
  fr: frMessagge,
  en: enMessagge,
};
export const AppIntlProvider = ({ children }) => {
  const { selectedLang } = useLang();
  const messages = useMemo(() => allMessage[selectedLang], [selectedLang]);
  return (
    <IntlProvider locale={selectedLang} messages={messages}>
      {children}
    </IntlProvider>
  );
};