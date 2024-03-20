import React from "react";
import { Routes, Route } from "react-router-dom";
import {Gasteac} from '../Gasteac'
import { Navbar } from "../../ui/components/Navbar";
import { LinkPages } from "../../pages/LinkPages";
import { AboutPage } from "../../pages/AboutPage";

export const GasteacRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/*' element={<Gasteac/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/links' element={<LinkPages/>}/>

      </Routes>
    </>
  );
};
