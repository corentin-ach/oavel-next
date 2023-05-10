import React from 'react';
import mapboxgl from 'mapbox-gl';
import useSource from '@/functions/useSource';
import useMap from '@/functions/useMap';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY29yZW50aW4yOSIsImEiOiJja3V3dmgxOG0wMTdpMnZsOGs2OGU4eDQzIn0.p3UORX0_zEWs7XpxBBWMHA';

function MapContainer() {
  const m = useMap();
  const source = useSource();

  if (source?.markers?.features) {
    for (const feature of source.markers.features) {
      const el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .addTo(m.map);
    }
  }

  return (
    <div
      style={{ height: '100vh' }}
      ref={m.mapContainer}
      className="map-container"
    />
  );
}

export default MapContainer;
