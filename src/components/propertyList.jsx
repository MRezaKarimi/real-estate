import React from "react";
import PropertyItem from "./propertyItem";

const PropertyList = () => {
  const propertyList = Array(10).fill({
    bed: 2,
    bath: 3,
    price: 2500000,
    address: "5th Ave, Manhattan",
    images: [
      "https://img.jamesedition.com/listing_images/2022/05/20/15/54/03/e6000997-394f-4c6e-b0b5-2c51a5c22c76/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2022/05/20/15/54/03/bb1d8c38-a63a-4196-bda1-0dc6e411c6be/je/556x342xcxm.jpg",
    ],
  });

  return (
    <div className="basis-1/2">
      <div className="grid grid-cols-2 gap-4 px-4">
        {propertyList.map((property, i) => (
          <PropertyItem key={i} property={property} />
        ))}
      </div>
      <div className="flex flex-row justify-center py-8">
        {[...Array(10)].map((x, i) => (
          <span
            key={i}
            className="text-white text-lg mx-1 px-3 py-0.5 bg-slate-700 rounded-full"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
