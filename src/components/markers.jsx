import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import PropertyItem from "./propertyItem";

export const markerIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/marker.svg",
  iconRetinaUrl: process.env.PUBLIC_URL + "/marker.svg",
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(27, 40),
});

const Markers = () => {
  const { propertyList, mapBounds } = useSelector((store) => store.property);
  const map = useMap();
  useEffect(() => {
    if (mapBounds["northWest"] && mapBounds["southEast"]) {
      map.fitBounds([mapBounds["northWest"], mapBounds["southEast"]]);
    }
  }, [propertyList]);

  return (
    <>
      {propertyList.map((property, i) => (
        <Marker
          key={i}
          position={[property.lat, property.long]}
          icon={markerIcon}
        >
          <Popup key={property.id} className="w-fit">
            <div className="w-60">
              <PropertyItem property={property} />
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
