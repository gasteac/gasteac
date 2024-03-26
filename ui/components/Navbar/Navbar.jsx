import { NavLink } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  
  return (
    <>
      <nav className="navbar">
       
       

        {/* 
        <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'noUnderline' : ""}`} to="/">
          <img
          className="logo2"
            src="gasteacLogoWhiteOnly.png"
            alt="gasteacLogo"
          />
        </NavLink> */}

        {/* <div className="ul">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/about"
          >
            «About/»
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/contact"
          >
            «Contact/»
          </NavLink>
          </div>
          <button style={{fontSize:'20px'}} className="buttonNav" onClick={() => mostrarAlerta()}>
            «Resume»
          </button> */}
         <input type="checkbox" id='sidebar-active' />
         <label htmlFor='sidebar-active' className="open-sidebar-button">
         <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
         </label>
         <label id="overlay" htmlFor="sidebar-active"></label>
         <div className="links-container">
          <label htmlFor='sidebar-active' className="close-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </label>
         
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/"
            id='home'
          >
            «Home/»
          </NavLink>
          
        {/* <NavLink
        className='G'
            to="/"
          >
            <img src='wolfIcon.png'></img>
          </NavLink>
          <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
            <img src="linkedin.png" alt="linkedin" />
          </NavLink>
          <NavLink target="_blank" to="https://github.com/gasteac">
            <img src="github.png" alt="github" />
          </NavLink> */}
        
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/about"
          >
            «About/»
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/proyects"
          >
            «Proyects/»
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/contact"
          >
            «Contact/»
          </NavLink>
         </div>
        
      </nav>
    </>
  );
};

