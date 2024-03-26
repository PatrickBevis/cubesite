import {
  URL_PROJECT,
  URL_BLOG,
  URL_CONTACT,
  URL_ABOUT,
} from "../constants/URL/urlFrontEnd";


export const cubeData = [
  { id: 1, title: "BLOG", url: URL_BLOG, color: "bg-yellow-300", hover:"hover:bg-yellow-200", hasLockIcon: false },

  { id: 2, title: "PROJETS", url: URL_PROJECT, color: "bg-red-300", hasLockIcon: false },

  { id: 3, color: "bg-white", hasLockIcon: true  },

  { id: 4, title: " A PROPOS ", url: URL_ABOUT, color: "bg-blue-300", hasLockIcon: false },

  { id: 5, color: "bg-white", hasLockIcon: false },

  { id: 6, color: "bg-white", hasLockIcon: true },

  { id: 7, color: "bg-white", hasLockIcon: true },

  { id: 8, color: "bg-white", hasLockIcon: true },

  { id: 9, title: "CONTACT", url: URL_CONTACT, color: "bg-green-300", hasLockIcon: false },
];
