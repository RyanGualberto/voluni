import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import Details from "../pages/details";

export default function CardEvent({ data }) {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="cardContainer">
      {modal && <Details data={data} closeModal={setModal} />}
      <h1>{data.name}</h1>
      <img src={data.image} />
      <p>{data.description}</p>
      <p>{data.date}</p>
      <label>{data.voluntario}</label>
      <Link className="link" onClick={() => setModal(!modal)}>
        Ver Mais
      </Link>
    </div>
  );
}
