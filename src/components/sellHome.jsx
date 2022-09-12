import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FilledButton, OutlinedButton } from "./buttons";
import LocationPicker from "./locationPicker";

const SellHome = () => {
  return (
    <div className="w-screen sm:w-[500px] m-auto">
      <div className="text-sky-800 font-bold text-lg sm:text-2xl flex justify-center my-5 items-center">
        <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
        <span className="text-center">Choose your location</span>
      </div>
      <ChooseLocation />
      <div className="flex justify-between my-5 mx-2 sm:mx-0">
        <OutlinedButton text="Back" />
        <FilledButton text="Next" />
      </div>
    </div>
  );
};

const ChooseLocation = () => {
  return (
    <div className="h-[500px]">
      <LocationPicker
        className="mx-2 sm:mx-0"
        onLocationPicked={(lat, lng) => console.log(lat, lng)}
      />
    </div>
  );
};

export default SellHome;
