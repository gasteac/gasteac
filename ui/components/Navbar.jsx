import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h3><NavLink className='gasteacLogo' to="/home">Home</NavLink></h3>
        <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/links">Links</NavLink>
        </div>
       
      </div>
    </>
  );
};
