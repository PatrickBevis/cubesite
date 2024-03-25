import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import * as URL from "../constants/URL/urlFrontEnd";
import HomeView from "../views/HomeView";
import ProjectView from "../views/ProjectView";
import BlogView from "../views/BlogView";
import ContactView from "../views/ContactView.jsx";
import AboutView from "../views/AboutView.jsx";

const Routes = () => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomeView />} />
      <Route path={URL.URL_PROJECT} element={<ProjectView />} />
      <Route path={URL.URL_BLOG} element={<BlogView />} />
      <Route path={URL.URL_CONTACT} element={<ContactView />} />
      <Route path={URL.URL_ABOUT} element={<AboutView/>} />
    </RoutesContainer>
  );
};

export default Routes;