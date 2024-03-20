import "animate.css";
export const Gasteac = () => {
  return (
    <>
      <div className="homePage">
        <div className="gsection gsec1 animate__animated animate__fadeInLeftBig animate__faster">
          <img src="gasteacBigLogo.png" alt="" />
        </div>
        <div className="gsection gsec2 animate__animated animate__fadeInRightBig animate__faster">
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
          </div>
        </div>
      </div>
    </>
  );
};
