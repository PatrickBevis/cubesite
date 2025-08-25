import React from "react";
import Button from "./button";
import { RandomColor } from "./randomColor";

const Card = ({ title, text, color, border, rounded, date, image }) => {
  const rColor = color !== "bg-gray-50" ? RandomColor() : "";
  const formatDate = (date) => {
    const options = { year: "2-digit", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const isNew = () => {
    if (!date) return false;
    const now = new Date();
    const creationDate = new Date(date);
    const diffInMs = now - creationDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays <= 3;
  };
  return (
    <div
      className={`relative block w-full md:w-64 h-96 bg-gray-50 ${border} ${rounded}`}
    >
      {image && (
        <div className="w-full h-1/2">
          <img
            src="https://picsum.photos/400/200"
            alt="Image aléatoire"
            className=" w-full h-full rounded-t-3xl"
          />
        </div>
      )}

      <h3 className="font-bold pl-3.5 text-24 font-lTera">{title}</h3>
      <p className="text-16 pt-8 pl-3.5 lg:pt-3">{text}</p>
      {date && (
        <p className="absolute bottom-2 right-2 text-gray-500 font-bold text-16">
          {formatDate(date)}
        </p>
      )}
      <div className="absolute pt-3 w-full flex justify-center">
        <Button className="px-3 py-1 text-sm">Voir l'article</Button>
      </div>
      {isNew() && (
        <p className="absolute bottom-2 left-2 border bg-gray-900 rounded-full text-16 font-bold text-gray-50 px-2 py-1">
          N
        </p>
      )}
    </div>
  );
};

export default Card;
