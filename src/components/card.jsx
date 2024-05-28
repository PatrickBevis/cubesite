import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import Logo from "../assets/img/logo.png";
import { RandomColor } from "./randomColor";

const Card = ({
  title,
  text,
  color,
  hover,
  border,
  hasLockIcon,
  hasLogo,
  cursor,
  rounded,
  nouv,
  date
}) => {
  const rColor = color !== "bg-gray-50" ? RandomColor() : "";
  const nouveau = nouv ? "NEW" : "";
  const formatDate = (date) => {
    const options = { year: '2-digit', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <div
      className={`relative block w-full md:w-52 h-52 pl-3.5 pt-9 pr-2 ${border} ${color} ${rounded} ${rColor} ${hover} ${cursor}`}
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
      <p className="text-16 pt-8 lg:pt-0 md:opacity-0 hover:opacity-100">{text}</p>
      {hasLockIcon && (
        <div className="absolute inset-0 flex justify-center items-center">
          <AiOutlineLock className="text-gray-900 w-20 h-20 " />
        </div>
      )}
      {date && (
        <p className="absolute bottom-2 right-2 text-gray-500 font-bold text-16">{formatDate(date)}</p>
      )}
    </div>
  );
};

export default Card;
