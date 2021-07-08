import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import CadastroClientes from "../Cadastro Clientes";
import CadstroPedras from "../Cadastro Pedras";
import Orcamento from "../Orcamento";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cadClientes" component={CadastroClientes} />
        <Route exact path="/cadPedras" component={CadstroPedras} />
        <Route exact path="/orcamentos" component={Orcamento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
