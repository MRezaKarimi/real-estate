import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FilledButton } from "./buttons";

const CitySearchField = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const cities = ["New York City", "Los Angles", "Miami"];

  const handleSelectCity = (city) => {
    setSearchQuery(city);
    setShowSuggestion(false);
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      navigate({
        pathname: "/buy",
        search: `${createSearchParams({ city: searchQuery })}`,
      });
    }
  };

  return (
    <>
      <div className="grow relative">
        <div className="my-2">
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onBlur={() => setShowSuggestion(false)}
            onFocus={() => setShowSuggestion(true)}
            autoComplete="off"
            name="city"
            className="bg-gray-100 rounded-lg w-full p-1.5 my-1 outline-none focus:border-sky-500 border-2"
            placeholder="Enter a city or state name"
          />
        </div>
        <div
          className="absolute top-14 bg-white border-2 border-gray-200 max-h-52 rounded-lg z-10 w-full overflow-auto"
          style={{ visibility: showSuggestion ? "visible" : "hidden" }}
        >
          {cities
            .filter((city) =>
              city.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((city, i) => (
              <div
                key={i}
                className="mx-2 cursor-pointer py-2 border-b-2"
                onMouseDown={() => handleSelectCity(city)}
              >
                {city}
              </div>
            ))}
        </div>
      </div>
      <div className="my-4 mx-2 sm:place-self-center">
        <FilledButton text="Search" onClick={handleSearch} />
      </div>
    </>
  );
};

export default CitySearchField;
