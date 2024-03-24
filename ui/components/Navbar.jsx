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
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `
      },
      customClass: {
        confirmButton: "custom-ok",
        cancelButton: "custom-cancel",
        container: "sweet-container",
        popup: "sweet-popup"
      },
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if(result.isConfirmed)
      window.location =
        "https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551";
    });
  };

  return (
    <>
    
      <div className="navbar">
        {/* <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'noUnderline' : ""}`} to="/">
          <img
          className="logo1"
            src="gasteac.png"
            alt="gasteacLogo"
          />
        </NavLink> */}
        <NavLink
        className='logo1'
            to="/"
          >
            gasteac
          </NavLink>


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
        
        <NavLink className='downloadCv' onClick={()=>mostrarAlerta()}>
          «Download CV»
        </NavLink>
      </div>
</div>
     
    </>
  );
};

