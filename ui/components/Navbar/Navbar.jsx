import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <input type="checkbox" id="sidebar-active" /> 
        {/* //como tengo un solo input, los 2 iconos cerrar y abrir hacen referencia a este input mediante htmlFor="sidebar-active" y como envuelven al icono, al hacer clic en este, es como hacer clic en el checkbox */}
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/"
            id="home"
          >
            «Home/»
          </NavLink>

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
