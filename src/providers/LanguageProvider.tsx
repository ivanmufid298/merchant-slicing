'use client';

import {
  localeLanguageState,
  messageLanguageState,
} from '@/redux-toolkit/app/slice';
import { useAppSelector } from '@/redux-toolkit/hooks';
import { IntlProvider } from 'react-intl';

export interface LanguageProvidersProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProvidersProps> = ({ children }) => {
  const localeLanguage = useAppSelector(localeLanguageState);
  const messageLanguage = useAppSelector(messageLanguageState);

  return (
    <IntlProvider
      key={localeLanguage}
      locale={localeLanguage}
      messages={messageLanguage[localeLanguage as keyof typeof messageLanguage]}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
