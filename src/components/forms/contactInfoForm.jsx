import FormHeader from "./formHeader";
import InputField from "../inputFields/inputField";

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
        validation="required"
      />
      <InputField
        label="Last Name"
        placeholder="Your Last Name"
        type="text"
        validation="required"
      />
      <InputField
        label="Email Address"
        placeholder="Your Email Address"
        type="email"
        validation="required|email"
      />
      <InputField
        label="Phone Number"
        placeholder="Your Phone Number"
        type="text"
        validation="required|phone"
      />
    </div>
  );
};

export default ContactInfoForm;
