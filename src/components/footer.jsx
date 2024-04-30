import React from "react";
import { RandomColor } from "./randomColor";
import { FooterCats } from "../data/footerCats";
import { socialData } from "../data/socialData";

const Footer = () => (
  <>
    <footer className={`${RandomColor()}`}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          {FooterCats.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-sm font-bold font-lTera text-gray-900">
                {category.title}
              </h3>
              <ul className="text-gray-900 font-medium">
                {category.links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-4 py-6 flex items-center justify-center  border-gray-200">
  <div className="flex justify-right space-x-4">
    {socialData.map((social, index) => (
      <a key={index} href={social.link[0].href} className="text-gray-900 ">
        {React.cloneElement(social.link[0].icon, { size: 40 })}
      </a>
    ))}
  </div>
</div>
        </div>

      </div>
      <div class="px-4 py-6 flex items-center justify-center">
        <span className="text-gray-900 font-lTera">
          © {new Date().getFullYear()} Patrick BEVIS. Tous droits réservés
        </span>
      </div>
    </footer>
  </>
);

export default Footer;
