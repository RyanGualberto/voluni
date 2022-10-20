import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function cardEvent({ data }) {
  return (
    <div className="cardContainer" key={data.id}>
      <h1>{data.titleEvent}</h1>
      <img src={data.imgUrl} />
      <p>{data.dscEvent}</p>
      <label>{data.voluntario}</label>
      <Link to="/details:id">Ver Mais</Link>
    </div>
  );
}
