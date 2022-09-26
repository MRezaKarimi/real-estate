import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  type,
  onChange,
  validator,
  onUnFocus,
  onFocus,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const newValue = event.target.value;

    if (onChange) {
      onChange(newValue);
    }
    if (validator) {
      setError(validator(newValue));
    }
    setValue(newValue);
  };

  return (
    <div className="my-4 mx-2 sm:mx-0">
      <label
        htmlFor={label.replaceAll(" ", "_")}
        className="text-sky-900 font-semibold"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onUnFocus}
        onFocus={onFocus}
        id={label.replaceAll(" ", "_")}
        className="bg-gray-100 rounded-lg w-full p-2 my-1 outline-none focus:border-sky-500 border-2"
        placeholder={placeholder}
      />
      <div className="text-xs text-red-600">{error}</div>
    </div>
  );
};

export default InputField;
