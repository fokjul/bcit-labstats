import { createContext, useContext, useState } from 'react';

const CookieModalContext = createContext();

export const CookieModalProvider = ({ children }) => {
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <CookieModalContext.Provider value={{ 
      isCookiePolicyOpen, 
      setIsCookiePolicyOpen,
      isCookieSettingsOpen, 
      setIsCookieSettingsOpen 
    }}>
      {children}
    </CookieModalContext.Provider>
  );
};

export const useCookieModal = () => {
  const context = useContext(CookieModalContext);
  if (!context) {
    throw new Error('useCookieModal must be used within a CookieModalProvider');
  }
  return context;
};