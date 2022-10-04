import { useState } from "react";
import { FilledButton, OutlinedButton } from "./buttons";
import PropertyLocationForm from "./forms/propertyLocationForm";
import ContactInfoForm from "./forms/contactInfoForm";
import PropertyDetailsForm from "./forms/propertyDetailsForm";

const SellHome = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const elements of event.target.elements) {
      console.log(elements.name, elements.defaultValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-11/12 mx-auto justify-between">
        <div className="w-screen sm:w-1/2">
          <PropertyLocationForm
            style={{
              opacity: step === 0 ? "1" : "0",
              height: step === 0 ? "auto" : "0",
            }}
          />
          <ContactInfoForm
            style={{
              opacity: step === 1 ? "1" : "0",
              height: step === 1 ? "auto" : "0",
            }}
          />
          <PropertyDetailsForm
            style={{
              opacity: step === 2 ? "1" : "0",
              height: step === 2 ? "auto" : "0",
            }}
          />
          <div className="flex justify-between my-2">
            <OutlinedButton
              text="Back"
              onClick={prevStep}
              disabled={step === 0}
            />
            {step === 2 ? (
              <FilledButton text="Submit" type="submit" />
            ) : (
              <FilledButton text="Next" onClick={nextStep} />
            )}
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/sell.svg`}
          className="w-0 sm:w-1/2 md:w-2/5 sticky top-16 h-[calc(100vh-4rem)]"
        />
      </div>
    </form>
  );
};

export default SellHome;
