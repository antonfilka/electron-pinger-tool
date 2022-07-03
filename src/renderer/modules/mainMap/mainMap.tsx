/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { mapAccessToken } from '../../constants/map';
import { Box } from '@mui/material';
import mapboxgl from 'mapbox-gl';

export function MainMap() {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(28.0334);
  const [lat, setLat] = useState(53.8892);
  const [zoom, setZoom] = useState(5.36);

  mapboxgl!.accessToken = mapAccessToken;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    const boxes = document.querySelectorAll('.mapboxgl-control-container');

    boxes.forEach((box) => {
      box.remove();
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Box sx={{ height: '500px', width: '100%' }}>
      <div ref={mapContainer} className="map-container" css={{ height: '100%', width: '100%' }} />
    </Box>
  );
}
