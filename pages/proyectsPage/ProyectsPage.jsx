import React from "react";
import "./proyects.css";
import Tilt from "react-parallax-tilt";
import "animate.css";
export const ProyectsPage = () => {
  return (
    <div className="proyects  animate__animated  animate__fadeIn animate__slower">
      <div className="textProyect">
        <h1>ERROR 404</h1>
        <p>We are working on it!</p>

        <p>But hey!</p>
        <p>Look at this parallax wolf</p>
        <Tilt className="tilt">
          <div>
            <img src="whiteWolf.png" />
          </div>
        </Tilt>
      </div>
    </div>
  );
};
