import React from "react";
import Navbar from "../components/navbar";
import "../styles/agenda.css";
import finalImage from "../assets/images/imgSobre.png";
import CardSobre from "../components/cardSobre.jsx";

export default function Agenda() {
  return (
    <div className="agenda-container">
      <Navbar />
      <div className="agenda-content">
        <img src={finalImage} />
        <h1>Sobre</h1>
        <CardSobre
          title="Missão"
          descrpition="A Voluni pretende formentar a disponiblidade de trabalho voluntário e diminuir a vulberabilidade social, através de uma plataforma que conecta pessoas que querem ajudar com pessoas que precisam de ajuda."
        />
        <CardSobre
          title="Visão"
          descrpition="Através do projeto a equipe busca abranger as cidades da Baixada Santista com o propósito de direcionar cada vez mais pessoas em situação de vulnerablidade social, cultural e afetiva, diminuindo a carencia da populucação, principalmente crianças."
        />
        <CardSobre
          title="Valores"
          descrpition="Com ajuda de pessoas voluntárias, podemos melhorar a qualidade de vida de quem procura a Voluni, e assim, contribuir para a construção de uma sociedade mais justa e solidária.
          Principios da Voluni são:
          Respeito;
          Transparência;
          Valorização cultural;
          "
        />
      </div>
    </div>
  );
}
