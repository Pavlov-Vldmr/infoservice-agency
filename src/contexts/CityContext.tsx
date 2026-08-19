import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

// 1. Импортируем интерфейс компании
import { type ICompanyInfo } from "@/services/api.types";

export type CityCode = keyof NonNullable<ICompanyInfo['city']>;

interface CityContextType {
  city: CityCode;
  setCity: (city: CityCode) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<CityCode>(() => {
    const saved = localStorage.getItem('selectedCity') as CityCode;

    const validCities: CityCode[] = ['yuS', 'korsakov'];
    return validCities.includes(saved) ? saved : 'yuS';
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

// eslint-disable-next-line react-refresh/only-export-components
export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) throw new Error('useCity должен использоваться внутри CityProvider');
  return context;
};
