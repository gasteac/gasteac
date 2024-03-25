import React from "react";
import "animate.css";
import "./aboutPage.css";


export const AboutPage = () => {

  // const mostrarAlerta = () => {
  //   Swal.fire({
  //     html: "<h1>Download Resume?</h1>",
  //     showClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeInUp
  //         animate__faster
  //       `,
  //     },
  //     hideClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeOutUp
  //         animate__faster
  //       `,
  //     },
  //     customClass: {
  //       confirmButton: "custom-ok",
  //       cancelButton: "custom-cancel",
  //       container: "sweet-container",
  //       popup: "sweet-popup",
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: "OK",
  //   }).then((result) => {
  //     if (result.isConfirmed)
  //       window.location =
  //         "https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551";
  //   });
  // };
  return (
    <>
      <div  className="about">
        <div className="aboutText">
          <div className="aboutmebutton">
            <h1>About me</h1>{" "}
            <button
              onClick={() =>
                (window.location =
                  "https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551")
              }
            >
              Download Resume
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
          <p>And yes I love cats, coffe, the galaxy, and wolves.</p>
        </div>
      </div>
    </>
  );
};
