import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

const useMap = () => {
  const mapContainer = useRef<any>(null);
  const mapRef = useRef<any>(null);
  const [map, setMap] = useState<Map | any>();
  useEffect(() => {
    if (mapRef.current) return;
    const mapDef = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-3.824453, 48.420341],
      zoom: 7,
    });
    mapRef.current = mapDef;
    setMap(mapDef);
  }, [mapRef]);
  return { map, mapContainer };
};

export default useMap;
