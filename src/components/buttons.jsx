import React from "react";

export const OutlinedButton = ({ text, onClick }) => {
  return (
    <div
      className="border-sky-700 h-10 flex items-center justify-center border-2 rounded-lg px-4 py-1 text-sky-700 font-semibold cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export const FilledButton = ({ text, onClick }) => {
  return (
    <div
      className="bg-sky-700 h-10 flex items-center justify-center rounded-lg px-4 py-1 text-white font-semibold cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
