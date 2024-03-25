import "animate.css";
import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";

export const Gasteac = () => {
  return (
    <>
      <div className="homePage">
        <div className="secretSection">
        <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/" style={{margin:'0'}}>
              <img
                className="gitlinksec1"
                style={{ width: "150px", height: "150px", margin:'10px' }}
                src="linkedin.png"
                alt="linkedin"
              />
            </NavLink>

            <NavLink target="_blank" to="https://github.com/gasteac" style={{margin:'0'}}>
              <img
                className="gitlinksec1"
                style={{ width: "150px", height: "150px", margin:'10px'}}
                src="github.png"
                alt="github"
              />
            </NavLink>
          
        </div>
        <div className="gsectionLeft animate__animated animate__fadeInLeftBig animate__fast">
          <Tilt
            style={{
              justifyContent: "center",
              height:'420px',
              width:'450px',
              alignContent:'center',
              display:'flex',
          
            }}
            className="tilt"
          >
            <div  style={{display:'flex', flexDirection:'column'}}>
       
            <img src="whiteWolf.png" className="logoGasteac" style={{width:'450px', height:'500px'}} />
            </div>
          </Tilt>
           
          <div className="gitlinksec1big" style={{display:'flex', justifyContent:'space-around'}}>
            <NavLink target="_blank" to="https://www.linkedin.com/in/gasteac/" style={{margin:'0'}}>
              <img
                className="gitlinksec1"
                style={{ width: "150px", height: "150px", margin:'10px' }}
                src="linkedin.png"
                alt="linkedin"
              />
            </NavLink>

            <NavLink target="_blank" to="https://github.com/gasteac" style={{margin:'0'}}>
              <img
                className="gitlinksec1"
                style={{ width: "150px", height: "150px", margin:'10px'}}
                src="github.png"
                alt="github"
              />
            </NavLink>
          </div>
        </div>

        <div className="gsectionRight animate__animated animate__fadeInRightBig animate__fast">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                color: "white",
                fontSize: "70px",
                alignSelf: "center",
                margin: "0",
              }}
            >
              Gaston E. Acosta
            </h1>
            <h1
              style={{
                color: "white",
                fontSize: "50px",
                alignSelf: "center",
                margin: "0",
              }}
            >
              Full Stack Developer
            </h1>
            <h2
              style={{ color: "white", fontSize: "18px", alignSelf: "center" }}
            >
              React | Nodejs | MongoDB | JavaScript | Flutter | Dart | MySQL
            </h2>




            
            <div
          
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <NavLink
                style={{ margin: "0" }}
                to="https://react.dev/"
                target="_blank"
              >
                <div className="zoom-in">
                  <img style={{ width: "85px" }} src="react.png" alt="react" />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://nodejs.org/en"
                target="_blank"
              >
                <div className="zoom-in">
                  <img
                    style={{ width: "75px" }}
                    src="nodejs.png"
                    alt="nodejs"
                  />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://www.mongodb.com/"
                target="_blank"
              >
                {" "}
                <div className="zoom-in">
                  <img
                    style={{ width: "75px" }}
                    src="mongodb.png"
                    alt="mongodb"
                  />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <div className="zoom-in">
                  <img src="javascript.png" alt="javascript" />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://flutter.dev/"
                target="_blank"
              >
                {" "}
                <div className="zoom-in">
                  <img
                    style={{ width: "75px" }}
                    src="flutter.png"
                    alt="flutter"
                  />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://dart.dev/"
                target="_blank"
              >
                {" "}
                <div className="zoom-in">
                  <img src="dart.png" alt="dart" />
                </div>
              </NavLink>
              <NavLink
                style={{ margin: "0" }}
                to="https://www.mysql.com/"
                target="_blank"
              >
                {" "}
                <div className="zoom-in">
                  <img src="mysql.png" alt="mysql" />
                </div>
              </NavLink>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
