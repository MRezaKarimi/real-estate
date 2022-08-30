import React from "react";
import PropertyItem from "./propertyItem";
import propertyList from "../services/fakeData.json";

const PropertyList = () => {
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
