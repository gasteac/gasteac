import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
export const LinkPages = () => {
  return (
    <div className="pages animate__animated animate__fadeInDown animate__faster">
      <NavLink target="_blank" to="https://github.com/gasteac">
        <h1>GITHUB -logo-</h1>
      </NavLink>

      <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
       <h1>Linkedin -logo-</h1>
      </NavLink>
    </div>
  );
};
