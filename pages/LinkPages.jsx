import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
export const LinkPages = () => {
  return (
    <div className="pages animate__animated animate__fadeInRightBig animate__fast">
      <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
        <img src="linkedin-mark-blue.png" alt="linkedin" />
      </NavLink>
      <NavLink target="_blank" to="https://github.com/gasteac">
        <img src="github-mark-white.png" alt="github" />
      </NavLink>

      <div className="contact">
        <ul>
          <h1>Contact me:</h1>

          <h2> gasteac@gmail.com</h2>

          <h2> (+54)3795130132 </h2>

          <h2> 🗺️ Corrientes, Argentina. </h2>
        </ul>
      </div>
    </div>
  );
};
