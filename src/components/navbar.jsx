import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoLabelWhite.png";
import "../styles/navbar.css";
import firebase from "../services/firebase";
import { toast, Toaster } from "react-hot-toast";

export default function Navbar() {
  const [dataUser, setDataUser] = React.useState({});

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    firebase
      .database()
      .ref("users")
      .child(user)
      .on("value", (snapshot) => {
        setDataUser(snapshot.val());
      });
  }, []);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        toast.custom((t) => (
          <div
            style={{
              padding: "16px",
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            <h3>Logout realizado com sucesso!</h3>
          </div>
        ));

        localStorage.clear();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="nav">
      <Link to="/home">
        <img src={logo} className="logo" alt="" />
      </Link>
      <nav>
        <Link to="/home">Home</Link>

        {dataUser.typeUser !== "client" ? (
          <Link to="/servicos">Eventos</Link>
        ) : (
          <Link to="/agenda">Agenda</Link>
        )}
        <Link to="/sobre">Sobre</Link>
        <Link className="signout" onClick={() => signOut()}>
          Sair
        </Link>
      </nav>
    </div>
  );
}
