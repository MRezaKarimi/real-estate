import React from "react";
import ImageSlider from "./imageSlider";

const PropertyItem = ({ property }) => {
  return (
    <div className="flex flex-col">
      <ImageSlider images={property.images} />
      <div className="flex flex-row justify-between pt-1">
        <p className="self-center text-xl font-medium">${property.price}</p>
        <p className="self-center text-md font-medium text-gray-800">
          {property.bed} Bed. {property.bath} Bath.
        </p>
      </div>
      <p className="text-gray-600">{property.address}</p>
    </div>
  );
};

export default PropertyItem;
