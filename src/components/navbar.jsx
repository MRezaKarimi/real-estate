import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navbarLink";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky top-0 px-4 bg-white h-16">
      <img
        className="py-4"
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
      />
      <NavBarLink label="Home" to="/" />
      <NavBarLink label="Buy" to="/buy" />
      <NavBarLink label="Sell" to="/sell" />
      <div className="grow"></div>
      <NavBarLink label="Login" to="/login" />
      <Link
        className="text-white bg-slate-700 rounded-lg text-lg h-8 my-4 mx-3 px-2"
        to="/sign-up"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBar;
