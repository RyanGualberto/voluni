import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function cardEvent({ data }) {
  return (
    <div className="cardContainer">
      <h1>{data.name}</h1>
      <img src={data.image} />
      <p>{data.description}</p>
      <p>{data.date}</p>
      <label>{data.voluntario}</label>
      <Link className="link" to="/details:id">
        Ver Mais
      </Link>
    </div>
  );
}
