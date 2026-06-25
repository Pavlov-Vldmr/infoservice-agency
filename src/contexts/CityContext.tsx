import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
// 1. Импортируем интерфейс компании
import { type ICompanyInfo } from "@/services/api";

/* 
  2. Автоматически извлекаем ключи городов:
  - 'typeof ICompanyInfo' здесь не нужен, берем сразу 'ICompanyInfo'
  - ['city'] обращается к объекту городов внутри интерфейса
  - NonNullable защищает от ошибки, если в интерфейсе city помечен как необязательный (city?)
*/
export type CityCode = keyof NonNullable<ICompanyInfo['city']>;
// Результат будет автоматически равен: 'yuS' | 'korsakov'

interface CityContextType {
  city: CityCode;
  setCity: (city: CityCode) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<CityCode>(() => {
    const saved = localStorage.getItem('selectedCity') as CityCode;

    // Безопасная проверка: если в localStorage лежит старая или чужая строка
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

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) throw new Error('useCity должен использоваться внутри CityProvider');
  return context;
};
