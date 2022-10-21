import React, { useEffect } from "react";
import "../styles/cadastro.css";
import ilustration from "../assets/images/ilustration.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import firebase from "../services/firebase";
import { toast, Toaster } from "react-hot-toast";

export default function Cadastro() {
  const [data, setData] = React.useState({
    name: "" || "",
    email: "" || "",
    services: "" || "",
    dateBirth: "" || "",
    cpf: "" || "",
    phone: "" || "",
    cnpj: "" || "",
    typeUser: "" || "client",
  });
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  useEffect(() => {
    localStorage.getItem("user") && (window.location.href = "/home");
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then((user) => {
        firebase
          .database()
          .ref("users")
          .child(user.user.uid)
          .set(data)
          .then(() => {
            toast.success("Cadastro realizado com sucesso!");
            window.location.href = "/";
          });
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar usuário!");
        console.log(error);
      });
  };

  return (
    <div className="cadastro-container">
      <div className="main">
        <div className="section col first">
          <img className="ilustration" src={ilustration} />
          <label>Voluni © 2022</label>
        </div>
        <div className="section col second">
          <img src={logo} className="logo" alt="" />
          <div className="container">
            <h1>Cadastro</h1>
            <h2>Seja bem vindo</h2>
            <form action="">
              <select
                onChange={(e) => {
                  setData({ ...data, typeUser: e.target.value });
                }}
                className="input"
              >
                <option defaultChecked value="client">
                  Beneficiário
                </option>
                <option value="volunteer">Voluntário</option>
                <option value="institution">Instituição</option>
              </select>
              <input
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
                className="input"
                type="text"
                placeholder="Nome De Usuário"
              />
              <input
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
                className="input"
                type="email"
                placeholder="Email"
              />
              {data.typeUser === "client" ? (
                <>
                  <input
                    className="input"
                    type="date"
                    onChange={(e) => {
                      setData({ ...data, dateBirth: e.target.value });
                    }}
                    placeholder="Data De Nascimento"
                  />
                  <input
                    className="input"
                    onChange={(e) => {
                      setData({ ...data, cpf: e.target.value });
                    }}
                    value={data.cpf}
                    type="number"
                    placeholder="CPF"
                  />
                </>
              ) : (
                <>
                  <input
                    className="input"
                    onChange={(e) => {
                      setData({ ...data, services: e.target.value });
                    }}
                    type="text"
                    placeholder="Serviços"
                  />
                  {data.typeUser === "institution" ? (
                    <input
                      onChange={(e) => {
                        setData({ ...data, cnpj: e.target.value });
                      }}
                      className="input"
                      type="number"
                      placeholder="CNPJ"
                    />
                  ) : (
                    <input
                      onChange={(e) => {
                        setData({ ...data, cpf: e.target.value });
                      }}
                      className="input"
                      type="number"
                      placeholder="CPF"
                    />
                  )}
                </>
              )}
              <input
                className="input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Senha"
              />
              <input
                className="input"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                type="password"
                placeholder="Confirmar Senha"
              />
              <Link className="button" onClick={saveData}>
                Cadastrar
              </Link>
            </form>
            <a href="">Recuperar senha</a>
            <Link to="/">Já possuo uma conta</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
