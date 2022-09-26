import {
  faBed,
  faLocationDot,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import numToMoney from "../utils/numToMoney";
import ImageSlider from "./imageSlider";

const PropertyItem = ({ property }) => {
  return (
    <div className="flex flex-col mb-4 rounded-xl shadow-xl shadow-sky-900/15">
      <ImageSlider images={property.images} />
      <a href={`/property/${property.id}`} target="blank" className="p-2.5">
        <div className="flex flex-row justify-between">
          <span className="self-center text-xl text-sky-900 font-semibold">
            ${numToMoney(property.price)}
          </span>
          <div className="text-sky-800">
            <span className="bg-gray-200 px-1.5 py-1 rounded-lg">
              <FontAwesomeIcon icon={faBed} className="mr-1.5" />
              {property.bed}
            </span>
            <span className="bg-gray-200 px-1.5 py-1 rounded-lg ml-2">
              <FontAwesomeIcon icon={faShower} className="mr-1.5" />
              {property.bath}
            </span>
          </div>
        </div>
        <p className="text-sky-900 text-sm mt-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-sky-900 mr-1.5"
          />
          {property.address}
        </p>
      </a>
    </div>
  );
};

export default PropertyItem;
