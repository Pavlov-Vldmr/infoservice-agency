// import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { Map, Placemark, YMaps } from '@iminside/react-yandex-maps';

const apiUrl: string = import.meta.env.VITE_API_URL;

export default function App() {
  const defaultState = {
    center: [46.935292, 142.754480],
    zoom: 17,
  };

  // throw new Error("Тестовая ошибка карты!");

  return (
    <YMaps query={{ apikey: apiUrl }}>
      <Map className='yandex-map' style={{ overflow: "hidden", borderRadius: ".625rem", width: "", height: "100%", minHeight: "400px" }} defaultState={defaultState}>
        <Placemark geometry={defaultState.center} />
      </Map>
    </YMaps>
  )
}