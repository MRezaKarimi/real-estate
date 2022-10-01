import { useState } from "react";
import FormHeader from "./formHeader";
import LocationPicker from "./locationPicker";

const PropertyLocationForm = ({ style }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const handlePickLocation = (lat, lng) => {
    setLat(lat);
    setLng(lng);
  };

  return (
    <div
      style={style}
      className="transition-opacity ease-in duration-300 overflow-hidden"
    >
      <FormHeader title="Choose your location" />
      <div className="h-[500px]">
        <LocationPicker
          className="mx-2 sm:mx-0"
          onLocationPicked={handlePickLocation}
        />
      </div>
      <input type="hidden" name="lat" value={lat ?? ""} />
      <input type="hidden" name="lng" value={lng ?? ""} />
    </div>
  );
};

export default PropertyLocationForm;
