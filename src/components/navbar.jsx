import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RandomColor } from "./randomColor";
import { URL_HOME } from "../constants/URL/urlFrontEnd";
import Logo from "../assets/img/logo.png";
import { cubeData } from "../data/cubeData";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={`${RandomColor()} mx-auto w-full z-50 fixed px-4 sm:px-6`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between py-4 lg:justify-start lg:space-x-10">
          <div>
            <Link to={URL_HOME}>
              <img
                className="h-24 w-auto cursor-pointer"
                src={Logo}
                alt=""
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center font-bold text-24 font-lTera justify-center lg:w-0">
            <div className="flex flex-col justify-center space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-7">
              {cubeData.map((item) => (
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
