import { Component } from "react";
import { grausParentesco } from "../util/constantes";

class Parentes extends Component {
  render() {
    return (
      <>
        <input name="nomeParente" type="text" />
        <select name="grauParente">
          {grausParentesco.map((grau) => (
            <option key={grau} value={grau}>
              {grau}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default Parentes;
