import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FilledButton, OutlinedButton } from "./buttons";
import Footer from "./footer";
import PropertySlider from "./propertySlider";
import CitySearchField from "./citySearchField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import InputField from "./inputFields/inputField";

const Main = () => {
  document.title = "MyEstate | Find Your Dream Home";
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  return (
    <>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="w-screen sm:w-1/2">
          <div>
            <h2 className="text-sky-900 font-bold text-6xl py-10 leading-[80px]">
              Find Your Dream Home
            </h2>
            <div className="flex flex-col sm:flex-row items-center mb-4 rounded-xl shadow-xl shadow-sky-900/15 p-8">
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
          src={`${process.env.PUBLIC_URL}/buy.svg`}
          className="w-0 sm:w-1/2 md:w-2/5 h-[calc(100vh-4rem)]"
        />
      </div>

      <div className="relative">
        <div className="h-[0.1rem] bg-gray-300 rounded-xl mx-auto w-10/12"></div>
        <div className="bg-white absolute -top-3 mx-auto left-0 right-0 w-fit text-center text-sky-900 font-semibold text-lg px-3">
          Recently Added Properties
        </div>
      </div>
      <PropertySlider />

      <div className="my-14 mx-auto w-11/12 bg-sky-900 rounded-xl p-5 sm:p-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center text-gray-100">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="mr-10 h-12 hidden md:block"
          />
          <div className="grow">
            <p className="text-3xl font-semibold">Subscribe to newsletter</p>
            <p className="my-2">
              Get the latest listed properties in your inbox everyday
            </p>
          </div>
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center">
            <div className="sm:mr-2">
              <InputField name="email" placeholder="Your email address" />
            </div>
            <FilledButton text="Subscribe" color="sky-300" />
          </div>
        </div>
      </div>

      <h2 className="text-sky-900 font-bold text-4xl mt-20 mb-10 leading-[80px] text-center">
        Why MyEstate?
      </h2>
      <div className="flex justify-between mx-auto mb-20 w-11/12">
        <div className="w-full sm:w-1/2">
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
          src={`${process.env.PUBLIC_URL}/search.svg`}
        />
      </div>
      <Footer />
    </>
  );
};

const WhyUsItem = ({ title, description }) => {
  return (
    <div className="rounded-lg border-l-8 border-sky-900 shadow-xl shadow-sky-900/15 hover:shadow-gray-300 duration-500 cursor-pointer p-5 my-6">
      <p className="text-sky-900 text-xl font-bold">{title}</p>
      <p className="text-gray-600 mt-3">{description}</p>
    </div>
  );
};

export default Main;
