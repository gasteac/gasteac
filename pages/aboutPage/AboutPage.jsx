import React from "react";
import "animate.css";
import "./aboutPage.css";


export const AboutPage = () => {
  return (
    <>
      <div  className="about animate__animated  animate__fadeIn animate__slower">
        <div className="aboutText">
          <div className="aboutmebutton">
            <h1>About me</h1>{" "}
            <button 
            >
              <a href="/public/ResumeAcostaGaston.pdf" download>Download Resume</a>
            </button>
          </div>
          <p>
            Hello! I'm an advanced student of the Information Systems
            Engineering career at the UTN Frre in Chaco, Argentina. I am a
            committed individual to my responsibilities and consider myself
            competent to face any challenge due to my dedication. I am highly
            critical, thus always striving for things to be done properly.
            Throughout my academic journey, I have actively participated in
            various projects within my faculty, gaining valuable hands-on
            experience and honing my skills in software development,
            problem-solving, and project management. I possess good
            communication skills, additionally, I'm commitment to tasks,
            critical thinking abilities, and flexibility in adapting to new
            challenges. Moreover, my creativity and teamwork skills have allowed
            me to thrive in collaborative environments.
          </p>
      
        </div>
      </div>
    </>
  );
};
