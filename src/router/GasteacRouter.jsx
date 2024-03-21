import React from "react";
import { Routes, Route } from "react-router-dom";
import {Gasteac} from '../Gasteac'
import { Navbar } from "../../ui/components/Navbar";
import { AboutPage } from "../../pages/AboutPage";
import { ContactPage } from "../../pages/ContactPage";

export const GasteacRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/*' element={<Gasteac/>}/>
        <Route path='/about' element={<AboutPage/>}/>

        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </>
  );
};
