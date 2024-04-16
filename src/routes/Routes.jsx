import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import * as URL from "../constants/URL/urlFrontEnd";
import HomeView from "../views/HomeView";
import ProjectView from "../views/ProjectView";
import BlogView from "../views/BlogView";
import ContactView from "../views/ContactView.jsx";
import AboutView from "../views/AboutView.jsx";
import Navbar from "../components/navbar.jsx";

const Routes = () => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomeView />} />
      <Route path={URL.URL_PROJECT} element={<Navbar><ProjectView /></Navbar>} />
      <Route path={URL.URL_BLOG} element={<Navbar><BlogView /></Navbar>} />
      <Route path={URL.URL_CONTACT} element={<Navbar><ContactView /></Navbar>} />
      <Route path={URL.URL_ABOUT} element={<Navbar><AboutView/></Navbar>} />
    </RoutesContainer>
  );
};

export default Routes;