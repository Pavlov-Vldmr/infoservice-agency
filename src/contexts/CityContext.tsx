// src/context/CityContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface CityContextType {
  city: string;
  setCity: (city: string) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem('selectedCity') || 'Москва';
  });

  useEffect(() => {
    localStorage.setItem('selectedCity', city);
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) throw new Error('useCity должен использоваться внутри CityProvider');
  return context;
};
