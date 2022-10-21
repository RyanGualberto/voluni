import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import CardEvent from "../components/cardEvent";
import "../styles/home.css";
import image from "../assets/images/ilustration.png";
import firebase from "../services/firebase";

export default function Home() {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("services")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        const services = Object.keys(data).map((key) => {
          return {
            id: key,
            name: data[key].name,
            description: data[key].description,
            vacancies: data[key].vacancies,
            date: data[key].date,
            time: data[key].time,
            image: data[key].image,
            ong: data[key].ong,
            userCreater: data[key].userCreater,
            uid: data[key].uid,
          };
        });
        setEvents(services);
        console.log(services);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1>Atividades Oferecidas Pelas ONG'S de Mongaguá</h1>
        <div className="carousel">
          {events.reverse().map((evento) => (
            <CardEvent key={evento?.id} data={evento} />
          ))}
        </div>
        <hr />
        <h1>Atividades Oferecidas Por Voluntários Da Nossa Plataforma</h1>
        <div className="carousel">
          {events.map((evento) => (
            <CardEvent key={evento?.id} data={evento} />
          ))}
        </div>
        <hr />
        <h1>Voluntarie-se</h1>
        <div className="row first">
          <img src={image} />
          <p>
            Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo,
            dedicação ou talento. Há mais de 70 anos, beneficiando famílias em
            vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça
            parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais
            de 70 anos, beneficiando famílias em vulnerabilidade social. Faça
            uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu
            tempo, dedicação ou talento. Há mais de 70 anos, beneficiando.
          </p>
        </div>
        <div className="row second">
          <img src={image} />
          <p>
            Seja um Voluntário. Faça parte da nossa causa! Doe seu tempo,
            dedicação ou talento. Há mais de 70 anos, beneficiando famílias em
            vulnerabilidade social. Faça uma Doação.Seja um Voluntário. Faça
            parte da nossa causa! Doe seu tempo, dedicação ou talento. Há mais
            de 70 anos, beneficiando famílias em vulnerabilidade social. Faça
            uma Doação.Seja um Voluntário. Faça parte da nossa causa! Doe seu
            tempo, dedicação ou talento. Há mais de 70 anos, beneficiando.
          </p>
        </div>
      </main>
    </>
  );
}
