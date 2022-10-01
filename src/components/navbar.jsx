import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navbarLink";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-row justify-between sm:justify-start items-center sticky top-0 px-4 bg-white h-16 z-50">
      <Link className="text-sky-900 text-3xl font-semibold mr-4" to="/">
        MyEstate
      </Link>

      <div className="block sm:hidden">
        <FontAwesomeIcon
          icon={showMenu ? faClose : faBars}
          className="text-sky-700 h-6"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="sm:hidden absolute top-16 right-0 w-full bg-white shadow-xl shadow-sky-900/15 duration-300 origin-top overflow-hidden"
          style={{ transform: showMenu ? "scaleY(1)" : "scaleY(0)" }}
        >
          <div className="flex flex-col m-2">
            <NavBarLink label="Buy" to="/buy" className="my-1.5" />
            <NavBarLink label="Sell" to="/sell" className="my-1.5" />
            <NavBarLink label="Login" to="/login" className="my-1.5" />
            <NavBarLink label="Sign Up" to="/sign-up" className="my-1.5" />
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center grow">
        <NavBarLink label="Buy" to="/buy" />
        <NavBarLink label="Sell" to="/sell" className="grow" />
        <NavBarLink label="Login" to="/login" />
        <Link
          className="text-white text-md font-semibold bg-sky-700 rounded-full h-8 ml-3 px-3 py-1"
          to="/sign-up"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
