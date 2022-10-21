import React from "react";
import "../styles/cardAgendamento.css";

export default function cardAgendamento({ data }) {
  return (
    <>
      <div className="cardAgendamento-container">
        <div className="cardAgendamento">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/voluni.appspot.com/o/ilustration.png?alt=media&token=1ecc4eee-bc43-48f1-b72d-b951697b2dee"
            alt=""
          />
          <div className="cardAgendamento-content">
            <div className="title">{data.name}</div>
            <div>{data.userCreater}</div>
            <div>{data.services}</div>
          </div>
        </div>
        <div className="dscEvent">{data.description}</div>
      </div>
    </>
  );
}
