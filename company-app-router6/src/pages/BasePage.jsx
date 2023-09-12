import { Fragment } from "react";
import "../resources/css/custom.css";

import Logo from "../resources/img/logo.png";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import { ContactPage } from "./ContactPage";
let BasePage = () => {
  return (
    <Fragment>
      <nav>
        <ul className="topnav">
          <li>
            <a href="#">
              <img src={Logo} height="50" />
            </a>
          </li>
          <div className="right">
            <li>
              <NavLink
               className={(props) => (props.isActive ? "active" : "")} 
              to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
               className={(props) => (props.isActive ? "active" : "")} 
              to="/About">About</NavLink>
            </li>
            <li>
              <NavLink
               className={(props) => (props.isActive ? "active" : "")} 
              to="/project">project</NavLink>
            </li>
            <li>
              <NavLink
               className={(props) => (props.isActive ? "active" : "")} 
              to="/Contact">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />



      </Routes>

      <footer>
        <div className="copyright">Copyright 2022 . All Rights Reserved.</div>
      </footer>
    </Fragment>
  );
};

export default BasePage;
