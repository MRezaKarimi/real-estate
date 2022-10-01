import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ label, to }) => {
  return (
    <Link className="text-sky-700 text-md font-semibold px-2" to={to}>
      {label}
    </Link>
  );
};

export default NavBarLink;
