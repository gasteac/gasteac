import { NavLink } from "react-router-dom";
export const Navbar = ({mostrarAlerta}) => {
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

        <NavLink className='downloadCv' onClick={()=>mostrarAlerta()}>
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
             <NavLink className='downloadCv' onClick={()=>mostrarAlerta()}>
          «Download CV»
        </NavLink>
        </h3>
      </div>
    </>
  );
};

