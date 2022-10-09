import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const OutlinedButton = ({
  text,
  icon,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`h-10 flex items-center justify-center border-2 rounded-lg px-4 py-1 my-2 font-semibold text-sm ${
        disabled
          ? "cursor-not-allowed border-gray-400 text-gray-400"
          : "cursor-pointer border-sky-700 text-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  );
};

export const FilledButton = ({
  text,
  icon,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`h-10 flex items-center justify-center rounded-lg px-4 py-1 my-2 text-white font-semibold text-sm ${
        disabled
          ? "cursor-not-allowed bg-gray-400"
          : "cursor-pointer bg-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  );
};
