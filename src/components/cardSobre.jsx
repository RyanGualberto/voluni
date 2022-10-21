import React from "react";
import "../styles/cardSobre.css";

export default function CardAbout({ title, descrpition }) {
  return (
    <div className="cardAboutContainer">
      <h1>{title}</h1>
      <div className="card">{descrpition}</div>
    </div>
  );
}
