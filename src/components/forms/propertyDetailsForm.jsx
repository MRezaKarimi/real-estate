import { faDollar, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormHeader from "./formHeader";
import InputField from "../inputFields/inputField";
import SelectorField from "../inputFields/selectorField";

const PropertyDetailsForm = ({ style }) => {
  return (
    <div
      style={style}
      className="transition-opacity ease-in duration-300 overflow-hidden"
    >
      <FormHeader title="Add Your Home Details" />
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faDollar}
          className="text-sky-900 text-xl mr-2"
        />
        <InputField
          placeholder="Price"
          name="price"
          validation="required|number"
        />
        <FontAwesomeIcon icon={faRuler} className="text-sky-900 text-xl mx-2" />
        <InputField
          placeholder="Area"
          name="area"
          validation="required|number"
        />
      </div>
      <SelectorField label="Bedrooms" />
      <SelectorField label="Bathrooms" />
      <InputField
        label="Address"
        placeholder="Your Home's Address"
        validation="required"
      />
    </div>
  );
};

export default PropertyDetailsForm;
