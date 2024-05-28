import React from "react";
import { RandomColor } from "./randomColor";
import { FooterCats } from "../data/footerCats";

const Footer = () => (
  <>
    <footer className={`${RandomColor()}  z-50`}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-4 px-4 py-6 md:py-8 md:grid-cols-4">
          {FooterCats.map((category, index) => (
            <div key={index} className="text-center md:text-left"> 
              <h3 className="mb-4 text-sm font-bold font-lTera text-gray-900">
                {category.title}
              </h3>
              <ul className="text-gray-900 font-medium">
                {category.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6 text-center">
        <span className="text-gray-900 font-lTera text-sm md:text-base">
          © {new Date().getFullYear()} Patrick BEVIS. Tous droits réservés
        </span>
      </div>
    </footer>
  </>
);

export default Footer;