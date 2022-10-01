import React, { useState } from "react";
import InputField from "./inputFields/inputField";

const CitySearchField = ({ onChange }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <div className="grow relative">
      <InputField
        label=""
        placeholder="Enter an address, neighborhood, city, or state"
        type="text"
        onFocus={() => setShowSuggestion(true)}
        onUnFocus={() => setShowSuggestion(false)}
      />
      <div
        className="absolute top-16 bg-white border-2 border-gray-200 h-52 rounded-lg z-10 w-full overflow-auto"
        style={{ visibility: showSuggestion ? "visible" : "hidden" }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="mx-2 cursor-pointer py-2 border-b-2"
            onClick={() => onChange(_)}
          >
            New York City, NY
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySearchField;
