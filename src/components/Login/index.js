import React, { useEffect } from "react";
import "./style.css";
import { auth } from "../../database/firebase";

export default function Login() {
  useEffect(() => {
    auth.onAuthStateChanged((val) => {
      if (val) {
        window.location.href = "/home";
      }
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    auth.signInWithEmailAndPassword(email, senha).then((authUser) => {
      console.log(authUser);
      window.location.href = "/home";
    });
  };

  return (
    <div className="login">
      <form>
        <h3>Login</h3>
        <input type="emial" placeholder="Seu E-mail" id="email" />
        <input type="password" placeholder="Sua Senha" id="senha" />
        <input
          type="submit"
          name="acao"
          value="Entrar"
          onClick={(e) => handleLogin(e)}
        />
      </form>
    </div>
  );
}
