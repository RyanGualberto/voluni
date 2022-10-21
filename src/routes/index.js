import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Agenda from "../pages/agenda";
import Cadastro from "../pages/cadastro";
import Sobre from "../pages/sobre";
import Servicos from "../pages/servicos.jsx";

const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
