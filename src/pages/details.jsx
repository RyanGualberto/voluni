import React from "react";
import "../styles/modalDetails.css";

export default function Details({ data, closeModal }) {
  console.log(data);
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h1>Detalhes do Serviço</h1>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modal-body">
          <div className="modal-body-image">
            <img src={data?.image} />
          </div>
          <div className="modal-body-info">
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <p>{data?.date}</p>
            <p>{data?.time}</p>
            <p>{data?.vacancies}</p>
            <p>Voluntário</p>
          </div>
        </div>
      </div>
    </div>
  );
}
