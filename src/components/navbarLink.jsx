import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ label, to, className = "" }) => {
  return (
    <Link
      className={`text-sky-700 text-md font-semibold px-2 ${className}`}
      to={to}
    >
      {label}
    </Link>
  );
};

export default NavBarLink;
