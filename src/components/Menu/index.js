import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../database/firebase";
import "./style.css";
import { GiStoneWall } from "react-icons/gi";
import { BsFillFolderFill, BsFillHouseDoorFill } from "react-icons/bs";
import { IoLogOut, IoPersonAddSharp } from "react-icons/io5";

export default function Menu() {
  useEffect(() => {
    auth.onAuthStateChanged((val) => {
      if (!val) {
        window.location.href = "/";
      }
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };
  return (
    <nav className="menu">
      <h2>Marmoaria do Joaquim</h2>
      <ul>
        <li>
          <Link to="/home">
            Home
            <BsFillHouseDoorFill />
          </Link>
        </li>
        <li>
          <Link to="/cadClientes">
            Cadastro de Clientes
            <IoPersonAddSharp />
          </Link>
        </li>
        <li>
          <Link to="/cadPedras">
            Cadastro de Pedras
            <GiStoneWall />
          </Link>
        </li>
        <li>
          <Link to="/orcamentos">
            Gerar Orçamento
            <BsFillFolderFill />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => logout()}>
            Sair
            <IoLogOut />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
