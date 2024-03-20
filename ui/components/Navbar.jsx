import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/home">
          <img
            style={{ height: "4.5vh", marginTop: "10px" }}
            src="gasteacLogoWhite.png"
            alt=""
          />
        </NavLink>

        <NavLink
          className="gasteacLogo"
          to="https://drive.usercontent.google.com/download?id=1l2yoeM9Hsl63wTZ29aw8UuNGIDCb_Xro&export=download&authuser=0&confirm=t&uuid=ca197c6e-0986-4fd2-9714-dcde1c6d362c&at=APZUnTVI38TD3u8OH2GF_F8GtQ7I:1710928896290"
        >
          «Download CV»
        </NavLink>

        <div>
          <NavLink to="/about">«About Me/»</NavLink>
          <NavLink to="/links">«Links/»</NavLink>
        </div>
      </div>

      <div className="navbar2">
        <h3>
          <NavLink
            className="gasteacLogo"
            to="https://drive.usercontent.google.com/download?id=1l2yoeM9Hsl63wTZ29aw8UuNGIDCb_Xro&export=download&authuser=0&confirm=t&uuid=ca197c6e-0986-4fd2-9714-dcde1c6d362c&at=APZUnTVI38TD3u8OH2GF_F8GtQ7I:1710928896290"
          >
            «Download CV»
          </NavLink>
        </h3>
        <div>
          <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
            <img
              style={{ width: "40px", marginTop: "15px" }}
              src="linkedin-mark-blue.png"
              alt="linkedin"
            />
          </NavLink>
          <NavLink target="_blank" to="https://github.com/gasteac">
            <img
              style={{ width: "40px", marginTop: "15px" }}
              src="github-mark-white.png"
              alt="github"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};
