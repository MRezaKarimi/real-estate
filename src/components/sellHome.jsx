import {
  faHome,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FilledButton, OutlinedButton } from "./buttons";
import LocationPicker from "./locationPicker";
import {
  emailFieldValidator,
  phoneFieldValidator,
  requiredFieldValidator,
} from "../utils/validators";
import InputField from "./inputField";
import SelectorField from "./selectorField";

const SellHome = () => {
  const steps = [
    <LocationChooser />,
    <ContactInfoForm />,
    <PropertyDetailsForm />,
  ];
  const [step, setStep] = useState(0);

  return (
    <div className="w-screen sm:w-[500px] m-auto">
      {steps[step]}
      <div className="flex justify-between my-5 mx-2 sm:mx-0">
        {step === 0 ? (
          <div></div>
        ) : (
          <OutlinedButton text="Back" onClick={() => setStep(step - 1)} />
        )}
        <FilledButton text="Next" onClick={() => setStep(step + 1)} />
      </div>
    </div>
  );
};

const FormHeader = ({ title, icon }) => {
  return (
    <div className="text-sky-800 font-bold text-lg sm:text-2xl flex justify-center my-5 items-baseline">
      <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />
      <span className="text-center mb-2">{title}</span>
    </div>
  );
};

const LocationChooser = () => {
  return (
    <>
      <FormHeader title="Choose your location" icon={faLocationDot} />
      <div className="h-[500px]">
        <LocationPicker
          className="mx-2 sm:mx-0"
          onLocationPicked={(lat, lng) => console.log(lat, lng)}
        />
      </div>
    </>
  );
};

const ContactInfoForm = () => {
  return (
    <>
      <FormHeader title="Add Your Contact Info" icon={faPhone} />
      <InputField
        label="First Name"
        placeholder="Your First Name"
        type="text"
        validator={requiredFieldValidator}
      />
      <InputField
        label="Last Name"
        placeholder="Your Last Name"
        type="text"
        validator={requiredFieldValidator}
      />
      <InputField
        label="Email Address"
        placeholder="Your Email Address"
        type="email"
        validator={emailFieldValidator}
      />
      <InputField
        label="Phone Number"
        placeholder="Your Phone Number"
        type="text"
        validator={phoneFieldValidator}
      />
    </>
  );
};

const PropertyDetailsForm = () => {
  return (
    <>
      <FormHeader title="Add Your Home Details" icon={faHome} />
      <div className="flex items-center text-sky-900 font-bold text-2xl">
        $&nbsp;
        <InputField label="" placeholder="Price" />
        <div className="w-10"></div>m<sup>2</sup>&nbsp;
        <InputField label="" placeholder="Area" />
      </div>
      <SelectorField label="Bedrooms" />
      <SelectorField label="Bathrooms" />
      <InputField label="Address" placeholder="Your Home's Address" />
    </>
  );
};

export default SellHome;
