import React from "react";
import "leaflet/dist/leaflet.css";
import propertyList from "../services/fakeData.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import numToMoney from "../utils/numToMoney";

const markerIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/marker.svg",
  iconRetinaUrl: process.env.PUBLIC_URL + "/marker.svg",
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15),
  className: "leaflet-div-icon",
});

const MapView = () => {
  return (
    <div className="basis-1/2">
      <div className="w-full sticky top-16">
        <MapContainer
          center={[40.7831, -73.9712]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "calc(100vh - 4rem)" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {propertyList.map((property) => (
            <Marker
              key={property.id}
              position={[property.lat, property.long]}
              icon={markerIcon}
            >
              <Popup key={property.id} maxHeight="100px">
                <span className="text-xl font-medium block">
                  ${numToMoney(property.price)}
                </span>
                <a
                  href={`/details/${property.id}`}
                  className="block text-center"
                  target="_blank"
                >
                  See Details
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
