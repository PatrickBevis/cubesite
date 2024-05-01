import React, { useState,useEffect } from 'react';
import { LuSun, LuMoon } from "react-icons/lu";
import { RandomColor } from './randomColor';

const DarkModeToggle = () => {
 
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
      );
    
      useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
      };

  return (
    <button onClick={toggleDarkMode} className={`fixed bottom-10 right-10 z-10 p-4 border-4 border-black rounded-3xl ${RandomColor()}`}>
      {darkMode ? <LuSun size={50} /> : <LuMoon size={50} />}
    </button>
  );
};

export default DarkModeToggle;
