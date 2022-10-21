import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import firebase from "../services/firebase";

export default function CardServico({ service }) {
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [data, setData] = React.useState({
    name: service?.name,
    description: service?.description,
    vacancies: service?.vacancies,
    date: service?.date,
    time: service?.time,
    image: service?.image,
  });

  const changeImage = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase
      .storage()
      .ref(`services/${localStorage.getItem("user")}/${service.id}/`);
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

  const editService = () => {
    firebase
      .database()
      .ref("services")
      .child(service?.id)
      .update(data)
      .then(() => {
        toast.success("Evento editado com sucesso!");
        setEditModal(false);
      })
      .catch((error) => {
        toast.error("Erro ao editar evento!");
        console.log(error);
      });
  };

  const deleteService = () => {
    firebase
      .database()
      .ref("services")
      .child(service?.id)
      .remove()
      .then(() => {
        toast.success("Evento excluído com sucesso!");
        setDeleteModal(false);
      })
      .catch((error) => {
        toast.error("Erro ao excluir evento!");
        console.log(error);
      });
  };

  return (
    <>
      {deleteModal && (
        <div className="modal">
          <div className="modalContent">
            <div className="modal-header">
              <h1>Deletar Serviço</h1>
              <button onClick={() => setDeleteModal(false)}>X</button>
            </div>
            <div className="modal-body">
              <p>Tem certeza que deseja excluir este evento?</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => setDeleteModal(false)}>Cancelar</button>
              <button onClick={deleteService}>Excluir</button>
            </div>
          </div>
        </div>
      )}
      {editModal && (
        <div className="modal-edit-container">
          <div className="modal-edit">
            <div className="modal-edit-header">
              <h1>Editar Serviço</h1>
              <button onClick={() => setEditModal(false)}>X</button>
            </div>
            <div className="modal-edit-body">
              <div className="modal-edit-body-input">
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
                    value={data.vacancies}
                    onChange={(e) =>
                      setData({ ...data, vacancies: e.target.value })
                    }
                    type="number"
                  />
                </div>
                <div className="date-time">
                  <div>
                    <label>Data do Serviço</label>
                    <input
                      value={data.date}
                      onChange={(e) =>
                        setData({ ...data, date: e.target.value })
                      }
                      type="date"
                    />
                  </div>
                  <div>
                    <label>Horário do Serviço</label>
                    <input
                      value={data.time}
                      onChange={(e) =>
                        setData({ ...data, time: e.target.value })
                      }
                      type="time"
                    />
                  </div>
                </div>
                <div>
                  <label>Imagem do Serviço</label>
                  <input type="file" onChange={(e) => changeImage(e)} />
                </div>
              </div>
            </div>
            <div className="modal-edit-footer">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editService();
                }}
                className="button"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      )}
      {service === undefined ? null : (
        <tr className="card-servico">
          <td className="title">{service?.name || "carregando"} </td>
          <td>{service?.description || "carregando"} </td>
          <td className="actions">
            <button className={service ? "button see" : "button see disabled"}>
              <FaEye />
            </button>
            <button
              onClick={() => setEditModal(!editModal)}
              className={service ? "button edit" : "button edit disabled"}
            >
              <FaEdit />
            </button>
            <button
              onClick={() => setDeleteModal(!deleteModal)}
              className={service ? "button delete" : "button delete disabled"}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
