import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RandomColor } from "./randomColor";
import { URL_HOME } from "../constants/URL/urlFrontEnd";
import Logo from "../assets/img/logo.png";
import LogoDark from "../assets/img/logoDark.png";
import { mobAffData } from "../data/mobAffData";
import { BiMenu } from "react-icons/bi";


const Navbar = ({ darkMode, setDarkmode }) => {
  const location = useLocation();
  const logoSrc = darkMode ? LogoDark : Logo;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={` ${RandomColor()} mx-auto w-full z-50 px-4 sm:px-6  top-0 left-0`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div>
            <Link to={URL_HOME}>
              <img
                className="h-24 w-auto cursor-pointer"
                src={logoSrc}
                alt=""
              />
            </Link>
          </div>

          {/* Menu burger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              <BiMenu className="w-8 h-8" />
            </button>
          </div>

          {/* Liens du menu */}
          <div className={`md:flex flex-1 items-center font-bold text-24 font-lTera justify-center md:w-0 ${showMenu ? 'block' : 'hidden'}`}>
            <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-7">
              {mobAffData.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className={`link ${location.pathname === item.url ? "underline" : ""}`}
                >
                  <div className="text-gray-900">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
