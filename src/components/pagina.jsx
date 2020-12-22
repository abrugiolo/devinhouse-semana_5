import { Component } from "react";

export default class Pagina extends Component {
  render() {
    return (
      <div className="paginaPrincipal">
        <div className="cabecalho">
          <h1>Escola Amorinha</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}
