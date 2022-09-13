import React, { useState } from "react";

const SelectorField = ({ label, onChange, max = 8 }) => {
  const [value, setValue] = useState(1);
  const handleChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
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

      <table className="border-separate table-fixed border-spacing-0 border-2 border-sky-700 w-full text-center rounded-lg my-1">
        <tbody>
          <tr>
            {[...Array(max)].map((_, i) => (
              <td
                key={i}
                onClick={() => handleChange(i + 1)}
                className={`py-1 border-r-2 border-sky-700 font-semibold last:border-0 cursor-pointer ${
                  value === i + 1 ? "bg-sky-700 text-white" : "text-sky-900"
                }`}
              >
                {i + 1}
                {i + 1 == max ? "+" : ""}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectorField;
