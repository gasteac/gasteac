import React from "react";
import { Routes, Route} from "react-router-dom";
import { Gasteac } from "../Gasteac";
import { Navbar } from "../../ui/components/Navbar";
import { AboutPage } from "../../pages/AboutPage";
import { ContactPage } from "../../pages/ContactPage";
import Swal from "sweetalert2";
export const GasteacRouter = () => {
  const mostrarAlerta = () => {
    Swal.fire({
      html: "<h1>Download Resume?</h1>",
      customClass: {
        confirmButton: "custom-ok",
        cancelButton: "custom-cancel",
      },
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if(result.isConfirmed)
      window.location =
        "https://drive.usercontent.google.com/download?id=1LWntKrjkPRPQUMDSckOqljj0uSmnvIiF&export=download&authuser=0&confirm=t&uuid=2b8f4a76-1f72-483a-b8dc-b256c2068d20&at=APZUnTUf5KZpxR1l0bewC9ffYThe:1710977473551";
    });
  };

  return (
    <>
      <Navbar mostrarAlerta={mostrarAlerta} />
      <Routes>
        <Route path="/*" element={<Gasteac />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
