import {
    URL_PROJECTS,
    URL_BLOG,
    URL_CONTACT,
    URL_ABOUT,
  } from "../constants/URL/urlFrontEnd";

  export const mobAffData = [
    {
      id: 1,
      title: "BLOG",
      text: "Si vous aimez les histoires et les découvertes!",
      url: URL_BLOG,
      border:"border-b-2 border-gray-900",
      cursor: "cursor-pointer",
      nouv: true,

     
    },
  
    {
      id: 2,
      title: "PROJETS",
      text: "Si vous aimez voir des trucs parfois commencés mais jamais finis!",
      hover: "lg:hover:scale-105",
      url: URL_PROJECTS,
      border:"border-b-2 border-gray-900",
      cursor: "cursor-pointer",
  
    },
  
    {
      id: 3,
      title: "A PROPOS ",
      text: "Si ma vie vous interesse un peu! (avant d'avoir ma page wikipédia)",
      hover: "lg:hover:scale-105",
      url: URL_ABOUT,
      border:"border-b-2 border-gray-900",
      cursor: "cursor-pointer",
    },
    
    {
      id: 4,
      title: "CONTACT",
      text: "Si vous voulez m'envoyer des messages!",
      hover: "lg:hover:scale-105",
      url: URL_CONTACT,
      border:"border-b-2 border-gray-900",
      cursor: "cursor-pointer",
    },
    
  ];
  