import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import config from "@/config/congig.json"

export default function App() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps query={{ apikey: config.YMAP_API_KEY }}>
      <Map className='test' style={{ overflow: "hidden", borderRadius: ".625rem", width: "", height: "100%" }} defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />

      </Map>
    </YMaps>
  );
} 