/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useGetFirestore } from '@/firebase/hook';
import { GeoJsonProperties } from 'geojson';
import { useEffect, useState } from 'react';

function useSource() {
  const spots = useGetFirestore('spots');

  const markersCollection: GeoJsonProperties = {
    type: 'FeatureCollection',
    features: [],
  };
  const areasCollection: GeoJsonProperties = {
    type: 'FeatureCollection',
    features: [],
  };
  const [markers, setMarkers] = useState<GeoJsonProperties>({});
  const [areas, setAreas] = useState<GeoJsonProperties>({});

  useEffect(() => {
    if (spots) {
      const { markerFeatures, areaFeatures } = spots.reduce(
        (acc: any, element: any) => {
          const { coords, status, area } = element;
          const pointFeature = {
            type: 'Feature',
            properties: {
              ...element,
              stringStatus: status ? 'true' : 'false',
            },
            geometry: {
              type: 'Point',
              coordinates: [coords[1], coords[0]],
            },
          };
          acc.markerFeatures.push(pointFeature);

          const areaFeature = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: area
                ? [area?.map((el: any) => [el?._lat, el?._long])]
                : [[]],
            },
          };
          acc.areaFeatures.push(areaFeature);
          return acc;
        },
        { markerFeatures: [], areaFeatures: [] },
      );

      markersCollection.features = markerFeatures;
      areasCollection.features = areaFeatures;
    }

    setMarkers(markersCollection);
    setAreas(areasCollection);
  }, [spots]);

  return { markers, areas };
}

export default useSource;
