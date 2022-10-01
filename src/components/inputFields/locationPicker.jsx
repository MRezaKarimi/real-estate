import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import { markerIcon } from "../markers";

function LocationMarker({ onLocationPicked }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: (event) => {
      if (onLocationPicked) {
        onLocationPicked(event.latlng.lat, event.latlng.lng);
      }
      setPosition(event.latlng);
    },
  });

  return position === null ? (
    <></>
  ) : (
    <Marker position={[position.lat, position.lng]} icon={markerIcon}></Marker>
  );
}

const LocationPicker = ({ onLocationPicked, className }) => {
  return (
    <MapContainer
      zoom={11}
      center={[40.7128, -74.006]}
      style={{ height: "100%", borderRadius: "0.5rem" }}
      className={className}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker {...{ onLocationPicked }} />
    </MapContainer>
  );
};

export default LocationPicker;
