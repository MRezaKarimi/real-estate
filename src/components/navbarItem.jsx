import React from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({ label, to }) => {
  return (
    <Link className="text-slate-700 text-lg px-2 py-4" to={to}>
      {label}
    </Link>
  );
};

export default NavBarItem;
