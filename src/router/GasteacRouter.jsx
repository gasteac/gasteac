import React from "react";
import { Routes, Route} from "react-router-dom";
import { AboutPage } from "../../pages/aboutPage/AboutPage";
import { ContactPage } from "../../pages/contactPage/ContactPage";
import { Navbar } from "../../ui/components/Navbar/Navbar";
import { ProyectsPage } from "../../pages/proyectsPage/ProyectsPage";
import { HomePage } from "../../pages/homePage/HomePage";

export const GasteacRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
