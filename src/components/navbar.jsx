import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navbarLink";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center sticky top-0 px-4 bg-white/90 h-16 z-50 backdrop-blur-md">
      <img
        className="py-4 h-16"
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
      />
      <NavBarLink label="Home" to="/" />
      <NavBarLink label="Buy" to="/buy" />
      <NavBarLink label="Sell" to="/sell" />
      <div className="grow"></div>
      <NavBarLink label="Login" to="/login" />
      <Link
        className="text-white text-md font-semibold bg-sky-700 rounded-lg h-8 mx-3 px-2 py-1"
        to="/sign-up"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBar;
