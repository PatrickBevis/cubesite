import {
  URL_PROJECT,
  URL_BLOG,
  URL_CONTACT,
  URL_ABOUT,
} from "../constants/URL/urlFrontEnd";


export const cubeData = [
  { id: 1, title: "BLOG",text:"Si vous aimez les histoires et les découvertes!", url: URL_BLOG, cursor: 'cursor-pointer', animate:'hover:animate-slide-left', rounded: "rounded-br-3xl" },

  { id: 2, title: "PROJETS",text:"Si vous aimez voir des trucs parfois commencés mais jamais finis!", url: URL_PROJECT,  cursor: 'cursor-pointer', rounded: "lg:rounded-b-3xl"},

  { id: 3, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop', rounded: "lg:rounded-bl-3xl"},

  { id: 4, title: "A PROPOS ",text:"Si ma vie vous interesse un peu! (avant d'avoir ma page wikipédia)", url: URL_ABOUT, cursor: 'cursor-pointer', rounded: "rounded-r-3xl"},

  { id: 5, color: "bg-gray-50", hasLogo: true, cursor:'cursor-no-drop', rounded: "rounded-3xl" },

  { id: 6, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop', rounded: "rounded-l-3xl" },

  { id: 7, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop', rounded: "rounded-tr-3xl" },

  { id: 8, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop', rounded: "rounded-t-3xl" },

  { id: 9, title: "CONTACT",text:"Si vous voulez m'envoyer des messages!", url: URL_CONTACT,  cursor: 'cursor-pointer', rounded: "rounded-tl-3xl"},
];
