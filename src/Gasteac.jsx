import "animate.css";
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
              <div className="zoom-in-out-box">
                <img style={{height:'75px'}} src="react.png" alt="react" />
              </div>
              <div className="zoom-in-out-box">
                <img style={{width:'75px'}}  src="nodejs.png" alt="nodejs" />
              </div>
              <div  className="zoom-in-out-box">
                <img style={{width:'75px'}}  src="mongodb.png" alt="mongodb" />
              </div>
              <div className="zoom-in-out-box">
                <img style={{height:'75px'}} src="javascript.png" alt="javascript" />
              </div>
              <div className="zoom-in-out-box">
                <img style={{width:'75px'}} src="flutter.png" alt="flutter" />
              </div>
              <div className="zoom-in-out-box">
                <img  src="dart.png" alt="dart" />
              </div>
              <div className="zoom-in-out-box">
                <img  src="mysql.png" alt="mysql" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
