import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCity, type CityCode } from '@/contexts/CityContext';

import { useCompany } from "@/contexts/CompanyInfoContext"

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
