import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../Menu";
import { db, storage } from "../../database/firebase";

import generatePDF from "../../utils/generatePDF";

export default function Orcamento() {
  const [clientes, setClientes] = useState([]);
  const [pedras, setpedras] = useState([]);
  const [cliente, setCliente] = useState(null);
  const [pedra, setPedra] = useState(null);
  const [infoCiente, setInfoCiente] = useState([]);

  useEffect(() => {
    async function buscaInfo() {
      await db
        .collection("marmoaria")
        .doc("clientes")
        .collection("cadastro")
        .onSnapshot((snapshot) => {
          setClientes(snapshot.docs.map((val) => val.data()));
        });

      await db
        .collection("marmoaria")
        .doc("pedras")
        .collection("cadastro")
        .onSnapshot((snapshot) => {
          setpedras(snapshot.docs.map((val) => val.data()));
        });
    }
    buscaInfo();
  }, []);

  const handleOrcamento = (e) => {
    e.preventDefault();
    generatePDF(cliente, pedra, infoCiente);
  };

  const alteraCliente = (e) => {
    let clienteSelect = e.target.value;
    let clienteInfo = clientes.filter((val) => val.nome == clienteSelect);
    setInfoCiente(clienteInfo[0]);
    setCliente(clienteSelect);
  };

  const alteraPedra = (e) => {
    let pedraSelect = e.target.value;
    console.log(pedraSelect);
    setPedra(pedraSelect);
  };

  return (
    <div className="orcamentos">
      <Menu />
      <form onSubmit={(e) => handleOrcamento(e)}>
        <div className="selects">
          <div className="select__cliente">
            <label htmlFor="cliente">Selecione o Cliente</label>
            <select id="cliente" onChange={(e) => alteraCliente(e)}>
              <option>Selecione</option>
              {clientes.map((val) => (
                <option key={val.cpfCnpj} value={val.nome}>
                  {val.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="select__pedra">
            <label htmlFor="pedra">Selecione a Pedra</label>
            <select id="pedra" onChange={(e) => alteraPedra(e)}>
              <option>Selecione</option>
              {pedras.map((valP) => (
                <option key={valP.nomePedra} value={valP.nomePedra}>
                  {valP.nomePedra} - R$ {parseFloat(valP.valorPedra)} MC
                </option>
              ))}
            </select>
          </div>
          <div className="btn__incluir">
            <input type="submit" value="Incluir" id="incluir" />
          </div>
        </div>
      </form>
    </div>
  );
}
