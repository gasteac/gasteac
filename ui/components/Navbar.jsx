import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <img
            style={{ height: "5vh", marginTop: "10px" }}
            src="gasteacLogoWhite.png"
            alt=""
          />
        </NavLink>

        <h3>
          <NavLink className="gasteacLogo" to="/home">
            «Home🏠/»
          </NavLink>
        </h3>
        <div>
          <NavLink to="/about">«About Me/»</NavLink>
          <NavLink to="/links">«Links/»</NavLink>
        </div>
      </div>

      <div className="navbar2">
        <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/" >
          <img
            style={{ width: "40px", marginTop:'15px' }}
            src="linkedin-mark-blue.png"
            alt="linkedin"
          />
        </NavLink>
        <NavLink target="_blank" to="https://github.com/gasteac">
          <img
            style={{ width: "40px", marginTop:'15px'  }}
            src="github-mark-white.png"
            alt="github"
          />
        </NavLink>
      </div>
    </>
  );
};
