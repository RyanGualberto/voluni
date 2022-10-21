import React, { useEffect } from "react";
import ImageAgendamento from "../assets/images/agendamentoImage.png";
import Navbar from "../components/navbar";
import "../styles/agenda.css";
import CardAgendamento from "../components/cardAgendamento";
import { eventos } from "../mocks/eventos";
import seeMoreImage from "../assets/images/imgSeeMore.png";
import finalImage from "../assets/images/imgFinalAgenda.png";
import firebase from "../services/firebase";

export default function Agenda() {
  const [myeventos, setMyEventos] = React.useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("users")
      .child(localStorage.getItem("user"))
      .child("myEvents")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        Object.keys(snapshot.val()).map((key) => {
          setMyEventos((myeventos) => [...myeventos, snapshot.val()[key]]);
        });
      });
  }, []);

  console.log(myeventos);
  return (
    <div className="agenda-container">
      <Navbar />
      <div className="agenda-content">
        <img src={ImageAgendamento} />
        <h1>Agenda</h1>
        {myeventos.reverse().map((evento) => (
          <CardAgendamento key={evento.id} data={evento} />
        ))}
        <div className="modal-final">
          <div>
            <label className="title"> Deseja Ver outros voluntários?</label>
            <img src={seeMoreImage} />
            <label className="dsc">
              Veja outros serviços voluntários disponíveis em mongaguá.
            </label>
            <button className="button">Ver Mais</button>
          </div>
          <img src={finalImage} alt="" />
        </div>
      </div>
    </div>
  );
}
