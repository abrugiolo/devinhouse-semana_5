import { Component } from "react";

class DataNascimento extends Component {
  render() {
    return (
      <input
        name={this.props.name}
        placeholder="Ex.: dd/mm/aaaa"
        pattern="[\d]{2}\/[\d]{2}\/[\d]{4}"
        maxLength="10"
        type="text"
      ></input>
    );
  }
}

export default DataNascimento;
