import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navbarLink";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center sticky top-0 px-4 bg-white/80 h-16 z-50 backdrop-blur-md">
      <Link className="text-sky-900 text-3xl font-semibold mx-5" to="/">
        MyEstate
      </Link>
      <NavBarLink label="Home" to="/" />
      <NavBarLink label="Buy" to="/buy" />
      <NavBarLink label="Sell" to="/sell" />
      <div className="grow"></div>
      <NavBarLink label="Login" to="/login" />
      <Link
        className="text-white text-md font-semibold bg-sky-700 rounded-full h-8 mx-3 px-3 py-1"
        to="/sign-up"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBar;
