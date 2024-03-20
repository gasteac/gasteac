import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <img style={{ height: "5vh", marginTop:'10px'}} src="gasteacLogoWhite.png" alt="" />
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
    </>
  );
};
