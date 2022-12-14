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
    <div className="flex flex-col rounded-lg border-2 border-gray-200">
      <ImageSlider images={property.images.map((image) => image.thumb)} />
      <a href={`/property/${property._id}`} target="blank" className="p-2.5">
        <div className="flex flex-row justify-between items-center">
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
