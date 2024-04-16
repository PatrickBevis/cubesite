import React from "react";

import { AiOutlineLock } from "react-icons/ai";
import Logo from "../assets/img/logo.png";
import { RandomColor } from "./randomColor";

const Card = ({
  title,
  text,
  color,
  hover,
  hasLockIcon,
  hasLogo,
  cursor,
  rounded,
  nouv,
  display,
}) => {
  const rColor = color !== "bg-gray-50" ? RandomColor() : "";
  const nouveau = nouv ? "NEW" : "";
  return (
    <div
      className={`relative block w-52 h-52 pl-3.5 pt-9 pr-2 border-4 border-gray-900 ${color} ${rounded} ${rColor} ${hover} ${cursor} ${nouveau} ${display}`}
    >
      {hasLogo && (
        <img
          src={Logo}
          alt={title}
          className="absolute inset-0 flex justify-center items-center"
        />
      )}
      <p className="absolute top-2 animate-pulse text-16 font-bold text-gray-50">
        {nouveau}
      </p>
      <h3 className="font-bold text-24 font-lTera">{title}</h3>
      <p className="text-16 opacity-0 hover:opacity-100">{text}</p>
      {hasLockIcon && (
        <div className="absolute inset-0 flex justify-center items-center">
          <AiOutlineLock className="text-gray-900 w-20 h-20 " />
        </div>
      )}
    </div>
  );
};

export default Card;
