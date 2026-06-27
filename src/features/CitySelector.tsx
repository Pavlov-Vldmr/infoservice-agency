// src/components/CitySelector.tsx
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useCity } from '@/contexts/CityContext';
import { useCity, type CityCode } from '@/contexts/CityContext';

import { useCompany } from "@/contexts/CompanyInfoContext"

// const { companyInfo } = useCompany();
// const { city: cityC } = useCity();




const CITIES: CityCode[] = ['yuS', 'korsakov'];

export const CitySelector = () => {
    const { city, setCity } = useCity();
    const { companyInfo } = useCompany();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const cityFromUrl = searchParams.get('city');

        if (cityFromUrl && CITIES.includes(cityFromUrl as CityCode) && cityFromUrl !== city) {
            setCity(cityFromUrl as CityCode);
        }
    }, [searchParams, city, setCity]);

    const handleCityChange = (newCity: CityCode) => {
        setCity(newCity);
        setSearchParams({ city: newCity });
    };

    return (
        <div className="city-selector">
            <select value={city} onChange={(e) => handleCityChange(e.target.value as CityCode)}>
                {CITIES.map((c) => (
                    <option key={c} value={c}>
                        {companyInfo?.city[c]?.name || c}
                    </option>
                ))}
            </select>
        </div>
    );
};


// // src/components/ProductList.tsx
// import { useEffect, useState } from 'react';
// import { useCity } from '../context/CityContext';

// export const ProductList = () => {
//   const { city } = useCity();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // fetchData(city) — отправляем город в запросе на бэкенд
//     fetch(`/api/products?city=${encodeURIComponent(city)}`)
//       .then(res => res.json())
//       .then(data => setItems(data));
//   }, [city]); // Запрос перезапустится автоматически при смене города

//   return <div>Список товаров для города {city}</div>;
// };
