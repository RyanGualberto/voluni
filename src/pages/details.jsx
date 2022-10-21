import React, { useEffect } from "react";
import "../styles/modalDetails.css";
import firebase from "../services/firebase";
import { toast, Toaster } from "react-hot-toast";

export default function Details({ data, closeModal }) {
  const [participate, setParticipate] = React.useState(false);
  const [dataUser, setDataUser] = React.useState({});
  const handleParticipate = () => {
    const keyEvent = data.id;
    const userId = localStorage.getItem("user");
    firebase
      .database()
      .ref("users")
      .child(userId)
      .child("myEvents")
      .child(keyEvent)
      .update({
        name: data.name,
        description: data.description,
        vacancies: data.vacancies,
        services: data.services,
        userCreater: data.name,
        date: data.date,
        time: data.time,
        image: data.image,
      })
      .then(() => {
        firebase
          .database()
          .ref("services")
          .child(keyEvent)
          .update({
            vacancies: data.vacancies - 1,
            participants: {
              [localStorage.getItem("user")]: {
                name: dataUser.name,
                email: dataUser.email,
              },
            },
          })
          .then(() => {
            toast.success("Participação confirmada!");
            setParticipate(true);
          })
          .catch((error) => {
            toast.error("Erro ao confirmar participação!");
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error("Erro ao participar do evento!");
        console.log(error);
      });
  };

  useEffect(() => {
    firebase
      .database()
      .ref("users")
      .child(localStorage.getItem("user"))
      .child("myEvents")
      .on("value", (snapshot) => {
        Object.keys(snapshot.val()).map((key) => {
          if (key === data.id) {
            setParticipate(true);
          }
        });
      });
    firebase
      .database()
      .ref("users")
      .child(localStorage.getItem("user"))
      .once("value", (snapshot) => {
        setDataUser(snapshot.val());
      })
      .then(() => {
        console.log(dataUser);
      });
  }, []);

  return (
    <div className="modal-container">
      <Toaster />
      <div className="modal">
        <div className="modal-header">
          <h1>Detalhes do Serviço</h1>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modal-body">
          <div className="modal-    body-image">
            <img src={data?.image} />
          </div>
          <div className="modal-body-info">
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <p>{data?.date}</p>
            <p>{data?.time}</p>
            <p>{data?.vacancies}</p>
            <p>Voluntário</p>
            <button
              onClick={participate ? null : () => handleParticipate()}
              className="button"
            >
              {participate ? "Participando" : "Participar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
