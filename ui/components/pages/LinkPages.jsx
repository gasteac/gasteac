import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
export const LinkPages = () => {
  return (
    <div className="pages animate__animated animate__fadeInDown animate__faster">
 
        <NavLink target="_blank" to="https://github.com/gasteac">
          <img
          className="links"
            style={{ width: "300px", marginRight:'180px'}}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </NavLink>
   
        <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
          <img
          className="links"
            style={{ width: "400px"}}
            src="https://static.vecteezy.com/system/resources/previews/023/986/980/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
            alt="linkedin"
          />
        </NavLink>
      
    </div>
  );
};
