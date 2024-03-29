import "animate.css";
import "./homePage.css";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="section animate__animated  animate__fadeIn animate__slower">
          <h1>Gaston Acosta</h1>
          <div className="socialLinks">
              <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/" rel="noreferrer">
            <img className="linkedin" src="linkedin.png" alt="linkedin" />
          </NavLink>
          <NavLink target="_blank" to="https://github.com/gasteac"  rel="noreferrer">
            <img className="git" src="github.png" alt="github" />
          </NavLink>
          </div>
        
          <h2>Full Stack Developer</h2>
          <h3>React | Nodejs | MongoDB | Flutter | MySQL</h3>
          <div className="sectionIcons">
            <a href="https://react.dev/" target="_blank"  rel="noreferrer">
              <img src="react.png" alt="react" />
            </a>
            <a href="https://nodejs.org/en" target="_blank"  rel="noreferrer">
              <img src="nodejs.png" alt="nodejs" />
            </a>
            <a href="https://flutter.dev/" target="_blank"  rel="noreferrer">
              <img src="flutter.png" alt="flutter" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank"  rel="noreferrer">
              <img src="mongodb.png" alt="mongodb" />
            </a>
            <a href="https://www.mysql.com/" target="_blank"  rel="noreferrer">
              <img src="mysql.png" alt="mysql" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
