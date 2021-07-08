import React from "react";
import "./style.css";
import Menu from "../Menu";
import { db } from "../../database/firebase";

export default function CadastroPedras() {
  const handlePedras = (e) => {
    e.preventDefault();
    let nomePedra = document.getElementById("nomePedra").value;
    let tamanhoPedra = document.getElementById("tamanhoPedra").value;
    let corPedra = document.getElementById("corPedra").value;
    let valorPedra = document.getElementById("valorPedra").value;
    let formPedra = document.getElementById("formPedra");

    db.collection("marmoaria").doc("pedras").collection("cadastro").add({
      nomePedra,
      tamanhoPedra,
      corPedra,
      valorPedra,
    });
    formPedra.reset();
  };
  return (
    <div className="cadastro_pedras">
      <Menu />
      <form onSubmit={(e) => handlePedras(e)} id="formPedra">
        <h3>Cadastro de pedras</h3>

        <div className="div__campo">
          <label htmlFor="nomePedra">Nome Pedra</label>
          <input type="text" id="nomePedra" placeholder="Nome da pedra ..." />
        </div>

        <div className="div__campo">
          <label htmlFor="tamanhoPedra">Tamanho Pedra</label>
          <input
            type="number"
            step="any"
            id="tamanhoPedra"
            min="0"
            placeholder="Tamanho da Pedra ..."
          />
        </div>

        <div className="div__campo">
          <label htmlFor="corPedra">Cor Pedra</label>
          <input type="text" id="corPedra" placeholder="Cor da pedra ..." />
        </div>

        <div className="div__campo">
          <label htmlFor="valorPedra">Valor da Pedra</label>
          <input
            type="number"
            step="any"
            id="valorPedra"
            placeholder="Valor da Pedra ..."
          />
        </div>

        <div className="btn_cadastrar">
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
