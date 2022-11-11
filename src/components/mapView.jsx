import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import Markers from "./markers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MapView = () => {
  const [mapBounds, setMapBounds] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [_, setQueryParams] = useSearchParams();

  const handleClickSearchArea = () => {
    setShowSearch(false);
    setQueryParams({
      northWest: `[${mapBounds.northWest.lat},${mapBounds.northWest.lng}]`,
      southEast: `[${mapBounds.southEast.lat},${mapBounds.southEast.lng}]`,
    });
  };

  const handleMapDrag = (bounds) => {
    setShowSearch(true);
    setMapBounds(bounds);
  };

  return (
    <div className="basis-1/2 hidden lg:block">
      <div className="w-full sticky top-16">
        {showSearch && (
          <div
            className="absolute w-fit bg-white shadow-lg rounded-lg z-10 left-0 right-0 mx-auto top-4 py-2 px-3 text-sky-900 font-semibold cursor-pointer"
            onClick={handleClickSearchArea}
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search this area
          </div>
        )}
        <MapContainer
          zoom={10}
          style={{ width: "100%", height: "calc(100vh - 4rem)", zIndex: "0" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapDragDetector dragHandler={handleMapDrag} />
          <Markers />
        </MapContainer>
      </div>
    </div>
  );
};

const MapDragDetector = ({ dragHandler }) => {
  useMapEvents({
    dragend: (event) => {
      if (dragHandler) {
        const bounds = event.target.getBounds();
        dragHandler({
          northWest: bounds.getNorthWest(),
          southEast: bounds.getSouthEast(),
        });
      }
    },
  });

  return <></>;
};

export default MapView;
