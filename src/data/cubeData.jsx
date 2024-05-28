import {
  URL_PROJECTS,
  URL_BLOG,
  URL_CONTACT,
  URL_ABOUT,
} from "../constants/URL/urlFrontEnd";


export const cubeData = [
  {
    id: 1,
    title: "BLOG",
    text: "Si vous aimez les histoires et les découvertes!",
    hover: "md:hover:scale-105",
    url: URL_BLOG,
    border: "border-4 border-gray-900",
    cursor: "cursor-pointer",
    rounded: "rounded-br-3xl",
    nouv: true,
    
  },

  {
    id: 2,
    title: "PROJETS",
    text: "Si vous aimez voir des trucs parfois commencés mais jamais finis!",
    hover: "md:hover:scale-105",
    url: URL_PROJECTS,
    border: "border-4 border-gray-900",
    cursor: "cursor-pointer",
    rounded: "rounded-b-3xl",
  
  },

  {
    id: 3,
    color: "bg-gray-50",
    hasLockIcon: true,
    border: "border-4 border-gray-900",
    cursor: "cursor-no-drop",
    rounded: "rounded-bl-3xl",
  },
  
  {
    id: 4,
    color: "bg-gray-50",
    hasLockIcon: true,
    border: "border-4 border-gray-900",
    cursor: "cursor-no-drop",
    rounded: "rounded-r-3xl",
 
  },
  {
    id: 5,
    color: "bg-gray-50",
    hasLogo: true,
    border: "border-4 border-gray-900",
    cursor: "cursor-no-drop",
    rounded: "rounded-3xl",

  },

  {
    id: 6,
    title: "A PROPOS ",
    text: "Si ma vie vous interesse un peu! (avant d'avoir ma page wikipédia)",
    hover: "md:hover:scale-105",
    url: URL_ABOUT,
    border: "border-4 border-gray-900",
    cursor: "cursor-pointer",
    rounded: "rounded-l-3xl",
   
  },

  {
    id: 7,
    color: "bg-gray-50",
    hasLockIcon: true,
    border: "border-4 border-gray-900",
    cursor: "cursor-no-drop",
    rounded: "rounded-tr-3xl",
 
  },

  {
    id: 8,
    color: "bg-gray-50",
    hasLockIcon: true,
    border: "border-4 border-gray-900",
    cursor: "cursor-no-drop",
    rounded: "rounded-t-3xl",
   
  },

  {
    id: 9,
    title: "CONTACT",
    text: "Si vous voulez m'envoyer des messages!",
    hover: "md:hover:scale-105",
    url: URL_CONTACT,
    border: "border-4 border-gray-900",
    hasLockIcon: false,
    rounded: "rounded-tl-3xl",
   
  },
];
