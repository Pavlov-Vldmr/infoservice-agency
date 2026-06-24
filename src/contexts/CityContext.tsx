import React, { createContext, useState, useEffect, useContext, type ReactNode } from "react";

interface CityContextType {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
  children: ReactNode;
}

export const CityProvider = ({ children }: CityProviderProps) => {
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem("user_city") || "Москва";
  });

  useEffect(() => {
    localStorage.setItem("user_city", city);
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

// 4. Кастомный хук с проверкой на null/undefined для безопасности типов
export const useCity = (): CityContextType => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};


// import React from 'react';
// import { useCity } from '../context/CityContext';

// // Словарь с данными для разных городов
// const contentData = {
//   'Москва': {
//     phone: '+7 (495) 000-00-00',
//     address: 'ул. Тверская, д. 1',
//     delivery: 'Доставка за 2 часа',
//   },
//   'Санкт-Петербург': {
//     phone: '+7 (812) 111-11-11',
//     address: 'Невский проспект, д. 10',
//     delivery: 'Доставка за 3 часа',
//   },
//   'Новосибирск': {
//     phone: '+7 (383) 222-22-22',
//     address: 'Красный проспект, д. 25',
//     delivery: 'Доставка на следующий день',
//   },
// };

// export const Content = () => {
//   const { city } = useCity();

//   // Берем данные для текущего города или дефолтные, если города нет в словаре
//   const currentContent = contentData[city] || {
//     phone: '8 (800) 555-35-35',
//     address: 'Уточняйте у оператора',
//     delivery: 'Доставка по РФ',
//   };

//   return (
//     <div style={{ marginTop: '20px' }}>
//       <h1>Приветствуем жителей города: {city}!</h1>
//       <p><b>Телефон филиала:</b> {currentContent.phone}</p>
//       <p><b>Адрес офиса:</b> {currentContent.address}</p>
//       <p><b>Условия:</b> {currentContent.delivery}</p>
//     </div>
//   );
// };
