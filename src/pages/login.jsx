import React from "react";
import "../styles/login.css";
import ilustration from "../assets/images/ilustration.png";
import logo from "../assets/images/logo.png";
import {Link} from 'react-router-dom'

export default function Home(props) {
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
            <form action="">
              <input type="text" placeholder="Nome De Usuário" />
              <input type="password" placeholder="Senha" />
              <Link  class="button" >Entrar</Link>
            </form>
            <a href="">Recuperar senha</a>
            <a href="/assets/pages/Cadastro.html">Ainda não possuo uma conta</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nome
// cpf
// dt nasc
// email
// senha

// voluntario

// nome
// hora
// data
// cnpj
// cpf
// ocupacao
