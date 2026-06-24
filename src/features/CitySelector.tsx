import { useCity } from '@/contexts/CityContext';

const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];

export const CitySelector = () => {
    const { city, setCity } = useCity();

    return (
        <div style={{ padding: '10px', background: '#f0f0f0' }}>
            <label htmlFor="city-select">Ваш город: </label>
            <select
                id="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                {cities.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};
