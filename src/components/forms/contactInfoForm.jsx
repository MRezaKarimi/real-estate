import {
  emailFieldValidator,
  phoneFieldValidator,
  requiredFieldValidator,
} from "../../utils/validators";
import FormHeader from "./formHeader";
import InputField from "../inputField";

const ContactInfoForm = ({ style }) => {
  return (
    <div
      style={style}
      className="transition-opacity ease-in duration-300 overflow-hidden"
    >
      <FormHeader title="Add Your Contact Info" />
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
    </div>
  );
};

export default ContactInfoForm;
