import React from "react";
import { Navbar } from "../components/navbar";
import { eventos } from "../mocks/eventos";
import CardEvent from "../components/cardEvent";
import "../styles/home.css";
import image from "../assets/images/ilustration.png";



export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Atividades Oferecidas Pelas ONG'S de Mongaguá</h1>
        <div className="carousel">
          {eventos.map((evento) => (
            <CardEvent data={evento} />
          ))}
        </div>
        <hr />
        <h1>Atividades Oferecidas Pelas ONG'S de Mongaguá</h1>
        <div className="carousel">
          {eventos.map((evento) => (
            <CardEvent data={evento} />
          ))}
        </div>
        <hr />
        <h1>Voluntarie-se</h1>
        <div className="row first">
          <img src={image} />
          <p>Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando famílias em vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando famílias em vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando.</p>
        </div>
        <div className="row second">
          <img src={image} />
          <p>Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando famílias em vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando famílias em vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais de 70 anos, beneficiando.</p>
        </div>

      </main>
    </>
  );
}
