import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navbarLink";

const NavBar = () => {
  return (
    <div className="grid grid-cols-4 sm:flex sm:flex-row items-center sticky top-0 px-4 bg-white sm:h-16 z-50 ">
      <Link
        className="text-sky-900 text-3xl font-semibold col-span-4 justify-self-center py-2 sm:mx-5"
        to="/"
      >
        MyEstate
      </Link>
      <NavBarLink label="Buy" to="/buy" />
      <NavBarLink label="Sell" to="/sell" />
      <div className="hidden sm:grow sm:block"></div>
      <NavBarLink label="Login" to="/login" />
      <Link
        className="text-white text-md font-semibold bg-sky-700 rounded-full h-8 sm:mx-3 px-3 py-1 min-w-max"
        to="/sign-up"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBar;
