import React from "react";
import PropertyList from "./propertyList";
import MapView from "./mapView";

const BuyHome = () => {
  return (
    <div className="flex flex-row ">
      <PropertyList />
      <MapView />
    </div>
  );
};

export default BuyHome;
