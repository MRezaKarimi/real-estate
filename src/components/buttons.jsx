import React from "react";

export const OutlinedButton = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`h-10 flex items-center justify-center border-2 rounded-lg px-4 py-1 my-2 font-semibold ${
        disabled
          ? "cursor-not-allowed border-gray-400 text-gray-400"
          : "cursor-pointer border-sky-700 text-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {text}
    </button>
  );
};

export const FilledButton = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`h-10 flex items-center justify-center rounded-lg px-4 py-1 my-2 text-white font-semibold ${
        disabled
          ? "cursor-not-allowed bg-gray-400"
          : "cursor-pointer bg-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {text}
    </button>
  );
};
