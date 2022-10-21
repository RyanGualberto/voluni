import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "../styles/servicos.css";
import CardServico from "../components/cardServico.jsx";
import { eventos } from "../mocks/eventos";
import { FaPlus } from "react-icons/fa";
import firebase from "../services/firebase";
import { toast, Toaster } from "react-hot-toast";
import imageDefault from "../assets/images/ilustration.png";

export default function Servicos() {
  const [addModal, setAddModal] = React.useState(false);
  const [services, setServices] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [data, setData] = React.useState({
    name: "",
    description: "",
    vacancies: "",
    date: "",
    time: "",
    ong: "",
    userCreater: "",
    image: "",
    services: "",
    uid: localStorage.getItem("user"),
  });

  const saveService = () => {
    firebase
      .database()
      .ref("services")
      .push(data)
      .then(() => {
        toast.success("Evento cadastrado com sucesso!");
        setAddModal(false);
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar evento!");
        console.log(error);
      });
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef
      .put(file)
      .then(() => {
        fileRef.getDownloadURL().then((url) => {
          setData({ ...data, image: url });
          console.log(url);
        });
      })
      .then(() => {
        toast.success("Imagem carregada com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao carregar imagem!");
        console.log(error);
      });
  };

  useEffect(() => {
    firebase
      .database()
      .ref("users")
      .child(localStorage.getItem("user"))
      .on("value", (snapshot) => {
        console.log(snapshot.val().name);
        setData({ ...data, services: snapshot.val().services });
        setData({ ...data, userCreater: snapshot.val().name });
      });

    firebase
      .database()
      .ref("services")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        const services = Object.keys(data).map((key) => {
          console.log(
            data[key].uid,
            data[key].uid === localStorage.getItem("user")
          );
          if (data[key].uid === localStorage.getItem("user")) {
            return {
              id: key,
              name: data[key].name,
              description: data[key].description,
              vacancies: data[key].vacancies,
              date: data[key].date,
              time: data[key].time,
              ong: data[key].ong,
              userCreater: data[key].userCreater,
              image: data[key].image,
              uid: data[key].uid,
            };
          }
        });
        setServices(services);
        console.log(services);
      });
  }, []);

  return (
    <div className="servicos-container">
      <Toaster />
      {addModal && (
        <div className="modal-add-container">
          <div className="modal-add">
            <div className="modal-add-header">
              <h1>Adicionar Serviço</h1>
              <button onClick={() => setAddModal(false)}>X</button>
            </div>
            <div className="modal-add-body">
              <div className="modal-add-body-input">
                <div>
                  <label>Nome do Serviço *</label>
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    type="text"
                  />
                </div>
                <div>
                  <label>Descrição do Serviço *</label>
                  <input
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                    type="text"
                  />
                </div>
                <div>
                  <label>Quantidade de vagas *</label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, vacancies: e.target.value });
                    }}
                    value={data.vacancies}
                    type="number"
                  />
                </div>
                <div className="date-time">
                  <div>
                    <label>Data do Serviço</label>
                    <input
                      onChange={(e) => {
                        setData({ ...data, date: e.target.value });
                      }}
                      value={data.date}
                      type="date"
                    />
                  </div>
                  <div>
                    <label>Horário do Serviço</label>
                    <input
                      onChange={(e) => {
                        setData({ ...data, time: e.target.value });
                      }}
                      value={data.time}
                      type="time"
                    />
                  </div>
                </div>
                <div>
                  <label>Imagem do Serviço</label>
                  <input
                    onChange={(e) => {
                      changeImage(e);
                    }}
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div className="modal-add-footer">
              <button onClick={() => saveService()} className="button">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />
      <div className="servicos-content">
        <h1>Meus Serviços</h1>
        <div className="servicos">
          <button onClick={() => setAddModal(!addModal)} className="button add">
            <FaPlus />
          </button>
          <table>
            <thead>
              <tr>
                <th className="title">Nome</th>
                <th>Descrição</th>
                <th className="actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {services.map((evento) => (
                <CardServico key={evento?.id} service={evento} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
