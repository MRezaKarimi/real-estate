import React from "react";
import "leaflet/dist/leaflet.css";
import propertyList from "../services/fakeData.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
            <Marker key={property.id} position={[property.lat, property.long]}>
              <Popup key={property.id} maxHeight="100px">
                <span className="text-xl font-medium block">
                  ${property.price}
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
        {/* <img
          className="h-[calc(100vh-4rem)] w-full"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
        /> */}
      </div>
    </div>
  );
};

export default MapView;
