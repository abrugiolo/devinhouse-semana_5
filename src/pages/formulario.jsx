import { Component } from "react";
import { turmas } from "../util/constantes";
import "../assets/css/estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <>
        <form className="form-cadastro">
          <span>Nome do Aluno:</span>
          <input name="nome" type="text"></input>
          <br />
          <span>Data de Nascimento:</span>
          <input name="dataNasc" type="date"></input>
          <br />
          <span>Nome do Responsável:</span>
          <input name="nomeResp" type="text"></input>
          <br />
          <span>Telefone do Responsável:</span>
          <input name="telResp" placeholder="(xx) xxxxx-xxxx" type="text"></input>
          <br />
          <span>Contato de Emergência:</span>
          <input name="contEmerg" type="text"></input>
          <br />
          <span>Telefone de Emergência:</span>
          <input name="telEmerg" placeholder="(xx) xxxxx-xxxx" type="text"></input>
          <br />
          <label htmlFor="restAlim">Possui restrições alimentares?</label>
          <input id="restAlim" type="checkbox"></input>
          <br />
          <input
            name="descRestAlim"
            placeholder="Descrição das restrições alimentares"
            type="text"
          ></input>
          <br />
          <label htmlFor="autorizImgVid">Autoriza uso de imagem?</label>
          <input id="usoImg" type="checkbox"></input>
          <br />
          <span>Pessoas autorizadas a buscar:</span>
          <input name="autBusc" type="text"></input>
          <br />
          <label htmlFor="turmas">Turma:</label>
          <select name="turmas">
            {turmas.map((turma) => (
              <option value={turma}>{turma}</option>
            ))}
          </select>
          <br />
          <span>Observações Adicionais:</span>
          <textarea name="obsAdic"></textarea>
          <br />
          <br />
          <button>Adicionar</button>
        </form>
      </>
    );
  }
}

export default FormularioCadastro;
