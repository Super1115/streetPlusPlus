'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const Map = () => {
  return (
    <MapContainer
      center={[23.97565, 120.9738819]}  // Set initial coordinates
      zoom={13}  // Set initial zoom level
      style={{ width: '100%', height: '100vh' }}  // Take up full height and width
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
    </MapContainer>
  )
}

export default Map
