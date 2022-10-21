import React, { useEffect } from "react";
import "../styles/login.css";
import ilustration from "../assets/images/ilustration.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import firebase from "../services/firebase";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.getItem("user") && (window.location.href = "/home");
  }, []);
  const handleLogin = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        toast.success(`Login realizado com sucesso, seja bem vindo(a)!!`);
        localStorage.setItem("user", user.user.uid);
        window.location.href = "/home";
      })
      .catch((error) => {
        toast.error(`Erro ao realizar login, tente novamente!`);
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="main">
        <div className="section col first">
          <img className="ilustration" src={ilustration} />
          <label>Voluni © 2022</label>
        </div>
        <div className="section col second">
          <img src={logo} className="logo" alt="" />
          <div className="container">
            <h1>Login</h1>
            <h2>Seja bem vindo</h2>
            <form>
              <input
                type="email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder="Nome De Usuário"
              />
              <input
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
                type="password"
                placeholder="Senha"
              />
              <Link
                onClick={() => handleLogin(data)}
                type="submit"
                className="button"
              >
                Entrar
              </Link>
            </form>
            <a href="">Recuperar senha</a>
            <Link to="/Cadastro">Ainda não possuo uma conta</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
