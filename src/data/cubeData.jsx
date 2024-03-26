import {
  URL_PROJECT,
  URL_BLOG,
  URL_CONTACT,
  URL_ABOUT,
} from "../constants/URL/urlFrontEnd";


export const cubeData = [
  { id: 1, title: "BLOG", url: URL_BLOG, color: "bg-yellow-300", hover:"hover:bg-yellow-200", cursor: 'cursor-pointer', animate:'hover:animate-slide-left' },

  { id: 2, title: "PROJETS", url: URL_PROJECT, color: "bg-red-300", cursor: 'cursor-pointer'},

  { id: 3, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop'},

  { id: 4, title: "A PROPOS ", url: URL_ABOUT, color: "bg-blue-300", cursor: 'cursor-pointer'},

  { id: 5, color: "bg-gray-50", hasLogo: true, cursor:'cursor-no-drop' },

  { id: 6, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop' },

  { id: 7, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop' },

  { id: 8, color: "bg-gray-50", hasLockIcon: true, cursor:'cursor-no-drop' },

  { id: 9, title: "CONTACT", url: URL_CONTACT, color: "bg-green-300", cursor: 'cursor-pointer'},
];
