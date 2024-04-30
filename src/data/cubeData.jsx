import {
  URL_PROJECT,
  URL_BLOG,
  URL_CONTACT,
  URL_ABOUT,
} from "../constants/URL/urlFrontEnd";


export const cubeData = [
  {
    id: 1,
    title: "BLOG",
    text: "Si vous aimez les histoires et les découvertes!",
    hover: "lg:hover:scale-105",
    url: URL_BLOG,
    cursor: "cursor-pointer",
    rounded: "lg:rounded-br-3xl",
    nouv: true,
    display: "lg:block",
  },

  {
    id: 2,
    title: "PROJETS",
    text: "Si vous aimez voir des trucs parfois commencés mais jamais finis!",
    hover: "lg:hover:scale-105",
    url: URL_PROJECT,
    cursor: "cursor-pointer",
    rounded: "lg:rounded-b-3xl",
    display: "lg:block",
  },

  {
    id: 3,
    title: "A PROPOS ",
    text: "Si ma vie vous interesse un peu! (avant d'avoir ma page wikipédia)",
    hover: "lg:hover:scale-105",
    url: URL_ABOUT,
    cursor: "cursor-pointer",
    rounded: "lg:rounded-bl-3xl",
    display: "lg:block",
  },
  
  {
    id: 4,
    title: "CONTACT",
    text: "Si vous voulez m'envoyer des messages!",
    hover: "lg:hover:scale-105",
    url: URL_CONTACT,
    cursor: "cursor-pointer",
    rounded: "lg:rounded-r-3xl",
    display: "lg:block",
  },
  {
    id: 5,
    color: "bg-gray-50",
    hasLogo: true,
    cursor: "cursor-no-drop",
    rounded: "rounded-3xl",
    display: "hidden lg:block",
  },

  {
    id: 6,
    color: "bg-gray-50",
    hasLockIcon: true,
    cursor: "cursor-no-drop",
    rounded: "rounded-l-3xl",
    display: "hidden lg:block",
  },

  {
    id: 7,
    color: "bg-gray-50",
    hasLockIcon: true,
    cursor: "cursor-no-drop",
    rounded: "rounded-tr-3xl",
    display: "hidden lg:block",
  },

  {
    id: 8,
    color: "bg-gray-50",
    hasLockIcon: true,
    cursor: "cursor-no-drop",
    rounded: "rounded-t-3xl",
    display: "hidden lg:block",
  },

  {
    id: 9,
    color: "bg-gray-50",
    hasLockIcon: true,
    cursor: "cursor-no-drop",
    rounded: "lg:rounded-tl-3xl",
    display: "hidden lg:block",
  },
];
