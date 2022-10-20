import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoLabelWhite.png"
import "../styles/navbar.css"

export function Navbar() {
  return (
    <div className="nav">
      <img src={logo} className="logo" alt="" />
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </div>
  );
}
