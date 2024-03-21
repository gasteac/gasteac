import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import Tilt from "react-parallax-tilt";
export const ContactPage = () => {
  return (
    <div className="pages animate__animated animate__fadeInRightBig animate__fast">
      <div className="contact">
        <ul>
          <h1>Contact me:</h1>
          <li>
            <h2> gasteac@gmail.com</h2>
          </li>
          <li>
            <h2> (+54)3795130132 </h2>
          </li>
          <li>
            <h2> 🗺️ Corrientes, Argentina. </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};
