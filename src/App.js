import React from "react";
import {Route, Router} from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Route element={<Login/>} path="/login" />
      <Route element={<Home/>} path="/home" />
    </Router>
  );
}
