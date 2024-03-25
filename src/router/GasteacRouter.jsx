import React from "react";
import { Routes, Route} from "react-router-dom";
import { AboutPage } from "../../pages/aboutPage/AboutPage";
import { ContactPage } from "../../pages/contactPage/ContactPage";
import { Navbar } from "../../ui/components/Navbar/Navbar";
import { ProyectsPage } from "../../pages/proyectsPage/ProyectsPage";
import { HomePage2 } from "../../pages/homePage/HomePage2";

export const GasteacRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<HomePage2/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
