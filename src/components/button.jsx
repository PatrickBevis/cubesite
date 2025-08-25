import React, { useState } from "react";
import { RandomColor } from "./randomColor";

const Button = ({ children, className }) => {
  // Couleur initiale au montage
  const [colorButton, setcolorButton] = useState(RandomColor());

  // Fonction pour changer la couleur au clic
  const handleClick = () => {
    setcolorButton(RandomColor());
  };

  return (
    <button
      type="submit"
      className={`p-4 border-4 border-black rounded-3xl ${colorButton} ${className} text-lg font-bold`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
