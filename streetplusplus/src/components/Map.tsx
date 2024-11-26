'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet'; // Import Leaflet to create custom icons

const Map = ({ setMarkerPosition }: { setMarkerPosition: React.Dispatch<React.SetStateAction<[number, number] | null>> }) => {
  const [markerPosition, setMarkerPositionState] = useState<[number, number] | null>(null); // Store marker position

  // Create a custom icon (you can replace the URL with your own image)
  const customIcon = new L.Icon({
    iconUrl: 'pin.svg',  // Path to your custom icon
    iconSize: [32, 32],                      // Size of the icon (adjust as needed)
    iconAnchor: [16, 32],                    // The anchor point of the icon (this should be the bottom center of the icon)
    popupAnchor: [0, -32],                   // Position of the popup relative to the icon
  });

  // Custom hook to handle map events
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng; // Get latitude and longitude of the clicked point
        setMarkerPositionState([lat, lng]); // Update the state with the new marker position
        setMarkerPosition([lat, lng]); // Pass the position to the parent component
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[23.97565, 120.9738819]}  // Set initial coordinates
      zoom={13}  // Set initial zoom level
      style={{ position: "absolute", width: '100%', height: '100%', zIndex: "1" }}  // Take up full height and width
    >
      <MapEvents />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {/* Conditionally render the marker if a position is set */}
      {markerPosition && (
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>
            You clicked here: {markerPosition[0].toFixed(5)}, {markerPosition[1].toFixed(5)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
