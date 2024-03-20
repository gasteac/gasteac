import React from "react";
import { Routes, Route } from "react-router-dom";
import {Gasteac} from '../Gasteac'
import { Navbar } from "../../ui/components/Navbar";
import { LinkPages } from "../../ui/components/pages/LinkPages";
import { AboutPage } from "../../ui/components/pages/AboutPage";

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
