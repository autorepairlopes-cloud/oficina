'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from './translations';

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'pt',
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt');

  useEffect(() => {
    const browserLang = navigator.language || 'pt';
    const isPt = browserLang.toLowerCase().startsWith('pt');
    setLocale(isPt ? 'pt' : 'en');
  }, []);

  const t = (key: string): string => {
    return translations[locale][key] || translations['pt'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
