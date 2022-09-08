import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./markers";

const MapView = () => {
  return (
    <div className="basis-1/2">
      <div className="w-full sticky top-16">
        <MapContainer
          zoom={10}
          style={{ width: "100%", height: "calc(100vh - 4rem)" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
