import React from "react";
import logoSrc from "../../../public/logo.svg";
import "../../style/global.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between bg-blue-200	">
      <img className="h-20 w-h-20" src={logoSrc} alt="logo" />
      <div className="flex mt-7 font-bold ">
        <Link to="/" className="transition-[1000ms] mr-7 hover:text-teal-700">
          Home
        </Link>
        <Link to="/about" className="transition  mr-7  hover:text-teal-700">
          About
        </Link>
        <Link to="/services" className="transition  mr-7  hover:text-teal-700">
          Services
        </Link>


      </div>
    </nav>
  );
};

export default Header;
