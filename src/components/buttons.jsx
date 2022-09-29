import React from "react";

export const OutlinedButton = ({ text, onClick, disabled = false }) => {
  return (
    <div
      className={`h-10 flex items-center justify-center border-2 rounded-lg px-4 py-1 font-semibold ${
        disabled
          ? "cursor-not-allowed border-gray-400 text-gray-400"
          : "cursor-pointer border-sky-700 text-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {text}
    </div>
  );
};

export const FilledButton = ({ text, onClick, disabled = false }) => {
  return (
    <div
      className={`h-10 flex items-center justify-center rounded-lg px-4 py-1 text-white font-semibold ${
        disabled
          ? "cursor-not-allowed bg-gray-400"
          : "cursor-pointer bg-sky-700"
      }`}
      onClick={disabled ? null : onClick}
    >
      {text}
    </div>
  );
};
