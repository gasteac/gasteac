import { NavLink } from "react-router-dom";

export const Navbar = () => {
  
  return (
    
    <>
      <div className="navbar">
        <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'noUnderline' : ""}`} to="/home">
          <img
            style={{ height: "4.5vh", marginTop: "10px" }}
            src="gasteacBigLogo.png"
            alt="gasteacLogo"
          />
        </NavLink>

        <NavLink to="https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551">
          «Download CV»
        </NavLink>

        <div>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/about"
          >
            «About Me/»
          </NavLink>
        
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/contact"
          >
            «Contact/»
          </NavLink>
        </div>
      </div>

      <div className="navbar2">
        <h3>
          <NavLink to="https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551">
            «Download CV»
          </NavLink>
        </h3>
        <div>
          <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
            <img
              style={{ width: "40px", marginTop: "15px" }}
              src="linkedin.png"
              alt="linkedin"
            />
          </NavLink>
          <NavLink target="_blank" to="https://github.com/gasteac">
            <img
              style={{ width: "40px", marginTop: "15px" }}
              src="github.png"
              alt="github"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

