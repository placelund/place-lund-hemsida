'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'

interface Location {
  position: { lat: number; lng: number }
  title: string
  color: string
}

interface LeafletMapProps {
  hotelLocation: { lat: number; lng: number }
  locations: Record<string, Location>
}

export default function LeafletMap({ hotelLocation, locations }: LeafletMapProps) {
  return (
    <MapContainer
      center={[hotelLocation.lat, hotelLocation.lng]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.entries(locations).map(([key, location]) => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.position.lat},${location.position.lng}`
        return (
          <CircleMarker
            key={key}
            center={[location.position.lat, location.position.lng]}
            radius={10}
            pathOptions={{
              color: '#000000',
              weight: 2,
              fillColor: location.color,
              fillOpacity: 1,
            }}
            eventHandlers={{
              click: () => window.open(googleMapsUrl, '_blank', 'noopener,noreferrer'),
            }}
          >
            <Tooltip permanent direction="right" offset={[12, 0]} opacity={1}>
              <span style={{ fontSize: '10px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {location.title}
              </span>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
