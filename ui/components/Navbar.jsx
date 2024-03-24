import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
export const Navbar = () => {
  const mostrarAlerta = () => {
    Swal.fire({
      html: "<h1>Download Resume?</h1>",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `,
      },
      customClass: {
        confirmButton: "custom-ok",
        cancelButton: "custom-cancel",
        container: "sweet-container",
        popup: "button-85 sweet-popup",
      },
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed)
        window.location =
          "https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551";
    });
  };

  return (
    <>
      <div className="navbar">
       
        <div className="navbarLeft">
        <NavLink
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
          </NavLink>
        </div>

        {/* 
        <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'noUnderline' : ""}`} to="/">
          <img
          className="logo2"
            src="gasteacLogoWhiteOnly.png"
            alt="gasteacLogo"
          />
        </NavLink> */}

        <div className="buttons">
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

          <button style={{fontSize:'20px'}} className="button-85" onClick={() => mostrarAlerta()}>
            «Resume»
          </button>
        </div>
      </div>
    </>
  );
};
