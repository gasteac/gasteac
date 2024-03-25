import "animate.css";
import Tilt from "react-parallax-tilt";
import "./homePage.css";
import { NavLink } from "react-router-dom";

export const HomePage2 = () => {
  return (
    <>
      <div className="homePage">
        <div className="section">
          <h1>Gaston Acosta</h1>
          <div className="socialLinks">
              <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/">
            <img className="linkedin" src="linkedin.png" alt="linkedin" />
          </NavLink>
          <NavLink target="_blank" to="https://github.com/gasteac">
            <img className="git" src="github.png" alt="github" />
          </NavLink>
          </div>
        
          <h2>Full Stack Developer</h2>
          <h3>React | Nodejs | MongoDB | Flutter | MySQL</h3>
          <div className="sectionIcons">
            <a href="https://react.dev/" target="_blank">
              <img src="react.png" alt="react" />
            </a>
            <a href="https://nodejs.org/en" target="_blank">
              <img src="nodejs.png" alt="nodejs" />
            </a>
            <a href="https://flutter.dev/" target="_blank">
              <img src="flutter.png" alt="flutter" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <img src="mongodb.png" alt="mongodb" />
            </a>
            <a href="https://www.mysql.com/" target="_blank">
              <img src="mysql.png" alt="mysql" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
