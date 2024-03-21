import "animate.css";
import { NavLink } from "react-router-dom";
export const Gasteac = () => {
  return (
    <>
      <div className="homePage">
        <div className="gsection gsec1 animate__animated animate__fadeInLeftBig animate__fast">
          <img src="gasteacBigLogo.png" alt="" />
        </div>
        <div className="gsection gsec2 animate__animated animate__fadeInRightBig animate__fast">
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
            <h1
              style={{ color: "white", fontSize: "20px", alignSelf: "center" }}
            >
              React | Nodejs | MongoDB | JavaScript | Flutter | Dart | MySQL
            </h1>
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
                <div className="zoom-in-out-box">
                  <img style={{ width: "85px" }} src="react.png" alt="react" />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://nodejs.org/en" target="_blank">
                <div className="zoom-in-out-box">
                  <img
                    style={{ width: "75px" }}
                    src="nodejs.png"
                    alt="nodejs"
                  />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://www.mongodb.com/" target="_blank">
                {" "}
                <div className="zoom-in-out-box">
                  <img
                    style={{ width: "75px" }}
                    src="mongodb.png"
                    alt="mongodb"
                  />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <div className="zoom-in-out-box">
                  <img src="javascript.png" alt="javascript" />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://flutter.dev/" target="_blank">
                {" "}
                <div className="zoom-in-out-box">
                  <img
                    style={{ width: "75px" }}
                    src="flutter.png"
                    alt="flutter"
                  />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://dart.dev/" target="_blank">
                {" "}
                <div className="zoom-in-out-box">
                  <img src="dart.png" alt="dart" />
                </div>
              </NavLink>
              <NavLink style={{ margin: "0" }} to="https://www.mysql.com/" target="_blank">
                {" "}
                <div className="zoom-in-out-box">
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
