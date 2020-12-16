import React, { Component } from "react";

class Pagina extends Component {
  render() {
    return (
      <div className="paginaPrincipal">
        <div className="cabecalho">
          <h1>Escola Amorinha</h1>
          {/* <h2>{this.props.title}</h2> */}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Pagina;
