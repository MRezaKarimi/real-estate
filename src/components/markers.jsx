import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import numToMoney from "../utils/numToMoney";
import { useSelector } from "react-redux";

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
  const { list: propertyList, mapBounds } = useSelector(
    (store) => store.property
  );
  const map = useMap();
  useEffect(() => {
    if (mapBounds["top_left"] && mapBounds["bottom_right"]) {
      map.fitBounds([mapBounds["top_left"], mapBounds["bottom_right"]]);
    }
  }, [propertyList]);

  return (
    <>
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
    </>
  );
};

export default Markers;
