import React from "react";
import "./style.css";
import Menu from "../Menu";
import { db } from "../../database/firebase";

export default function CadastroClientes() {
  const handleCadastro = (e) => {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let cpfCnpj = document.getElementById("cpfCnpj").value;
    let endereco = document.getElementById("endereco").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let formCad = document.getElementById("formCad");

    db.collection("marmoaria").doc("clientes").collection("cadastro").add({
      nome,
      telefone,
      cpfCnpj,
      endereco,
      numero,
      bairro,
    });

    formCad.reset();
  };
  return (
    <div className="cadastro">
      <Menu />
      <form
        className="form__cadastro"
        onSubmit={(e) => handleCadastro(e)}
        id="formCad"
      >
        <h3>Cadastro de Cliente</h3>
        <div className="div__campo">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Nome..." />
        </div>

        <div className="div__campo">
          <label htmlFor="telefone">Telefone</label>
          <input type="phone" id="telefone" placeholder="Telefone..." />
        </div>

        <div className="div__campo">
          <label htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input type="text" id="cpfCnpj" placeholder="CPF/CNPJ..." />
        </div>

        <div className="div__campo">
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" placeholder="Enderço..." />
        </div>

        <div className="div__campo">
          <label htmlFor="numero">Numero</label>
          <input type="text" id="numero" placeholder="Numero..." />
        </div>

        <div className="div__campo">
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id="bairro" placeholder="Bairro..." />
        </div>
        <div className="btn_cadastrar">
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
