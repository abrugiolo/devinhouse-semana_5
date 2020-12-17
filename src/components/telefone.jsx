import { Component } from "react";

class Telefone extends Component {
  render() {
    return (
      <input
        name={this.props.name}
        placeholder="Ex.: (00) 00000-0000"
        pattern="\([\d]{2}\) [\d]{5}-[\d]{4}"
        maxLength="15"
        type="text"
      />
    );
  }
}

export default Telefone;
