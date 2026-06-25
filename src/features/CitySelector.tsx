// src/components/CitySelector.tsx
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCity } from '@/contexts/CityContext';

const CITIES = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];

export const CitySelector = () => {
    const { city, setCity } = useCity();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const cityFromUrl = searchParams.get('city');
        if (cityFromUrl && cityFromUrl !== city) {
            setCity(cityFromUrl);
        }
    }, []);

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
        setSearchParams({ city: newCity });
    };

    return (
        <div className="city-selector">
            <span>Текущий город: {city}</span>
            <select value={city} onChange={(e) => handleCityChange(e.target.value)}>
                {CITIES.map((c) => (
                    <option key={c} value={c}>
                        {c}
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
