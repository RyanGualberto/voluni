import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={ <Login /> } />
          <Route path="/Home" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
