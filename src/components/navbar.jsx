import React from "react";
import NavBarItem from "./navbarItem";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky top-0 px-4 bg-white h-14">
      <img
        className="py-4"
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
      />
      <NavBarItem label="Home" to="/" />
      <NavBarItem label="Buy" to="/buy" />
      <NavBarItem label="Sell" to="/sell" />
      <div className="grow"></div>
      <NavBarItem label="Login" to="/login" />
      <NavBarItem label="Sign Up" to="/sign-up" />
    </div>
  );
};

export default NavBar;
