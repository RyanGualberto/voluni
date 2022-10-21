import React from "react";
import "../styles/cardAgendamento.css";

export default function cardAgendamento({ data }) {
  return (
    <>
      <div className="cardAgendamento-container">
        <div className="cardAgendamento">
          <img src={data.imgUrl} alt="" />
          <div className="cardAgendamento-content">
            <div className="title">{data.titleEvent}</div>
            <div>{data.voluntario}</div>
            <div>{data.ocupacao}</div>
          </div>
        </div>
        <div className="dscEvent">{data.dscEvent}</div>
      </div>
    </>
  );
}
