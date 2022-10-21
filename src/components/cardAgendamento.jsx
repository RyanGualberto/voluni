import React from "react";
import "../styles/cardAgendamento.css";

export default function cardAgendamento({ data }) {
  return (
    <>
      <div className="cardAgendamento-container">
        <div className="cardAgendamento">
          <img src={data.image} alt="" />
          <div className="cardAgendamento-content">
            <div className="title">{data.name}</div>
            <div>{data.userCreater}</div>
            <div>{data.services}</div>
          </div>
        </div>
        <div className="dscEvent">{data.dscEvent}</div>
      </div>
    </>
  );
}
