import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FilledButton } from "./buttons";
import Footer from "./footer";
import PropertySlider from "./propertySlider";
import CitySearchField from "./citySearchField";

const WhyUsItem = ({ title, description }) => {
  return (
    <div className="rounded-lg border-l-8 border-sky-900 shadow-xl shadow-sky-900/15 hover:shadow-gray-300 duration-500 cursor-pointer px-5 py-5 my-6">
      <p className="text-sky-900 text-xl font-bold">{title}</p>
      <p className="text-gray-600 mt-3">{description}</p>
    </div>
  );
};

const Main = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  return (
    <>
      <div className="flex justify-around">
        <div className="w-screen sm:w-1/2 p-8">
          <div>
            <h2 className="text-sky-900 font-bold text-6xl py-10 leading-[80px]">
              Find Your Dream Home
            </h2>
            <div className="flex flex-col sm:flex-row mb-4 rounded-xl shadow-xl shadow-sky-900/15 p-8">
              <CitySearchField onChange={(value) => setCity(value)} />
              <div className="my-4 mx-2 sm:place-self-center">
                <FilledButton
                  text="Search"
                  onClick={() =>
                    navigate({
                      pathname: "/buy",
                      search: `${createSearchParams({ city })}`,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/r.svg`}
          className="w-0 sm:w-1/2 md:w-2/5"
          style={{ height: "calc(100vh - 4rem)" }}
        />
      </div>

      <div className="relative">
        <div className="h-[0.1rem] bg-gray-300 rounded-xl mx-auto w-10/12"></div>
        <div className="bg-white absolute -top-3 mx-auto left-0 right-0 w-[15.5rem] text-center text-sky-900 font-semibold text-lg">
          Recently Added Properties
        </div>
      </div>
      <PropertySlider />

      <h2 className="text-sky-900 font-bold text-4xl mt-20 mb-10 leading-[80px] text-center">
        Why MyEstate?
      </h2>
      <div className="flex justify-between mx-2 mb-20 sm:mx-4">
        <div className="w-full sm:w-1/2 p-10">
          <WhyUsItem
            title="Advanced Search"
            description="Easily find a home that matches your needs and budget."
          />

          <WhyUsItem
            title="Free To Use"
            description="MyEstate is free and will remain free for ever."
          />

          <WhyUsItem
            title="Promote Your Property"
            description="Everyday thousands of people visit MyEstate worldwide."
          />
        </div>
        <img
          className="w-0 sm:w-1/2 md:w-2/5"
          src={`${process.env.PUBLIC_URL}/p.svg`}
        />
      </div>
      <Footer />
    </>
  );
};

export default Main;
