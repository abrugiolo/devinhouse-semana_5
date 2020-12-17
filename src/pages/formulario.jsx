import { Component } from "react";
import { turmas } from "../util/constantes";
import Telefone from "../components/telefone";
import DataNascimento from "../components/dataNascimento";
import Parentes from "../components/parentes";
import "../assets/css/estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro" method="get" target="_blank">
        <span>Nome do Aluno:</span>
        <input name="nome" type="text"></input>
        <br />
        <span>Data de Nascimento:</span>
        <DataNascimento name="dataNasc" />
        <br />
        <span>Nome do Responsável:</span>
        <input name="nomeResp" type="text"></input>
        <br />
        <span>Telefone do Responsável:</span>
        <Telefone name="telResp" />
        <br />
        <span>Contato de Emergência:</span>
        <input name="contEmerg" type="text"></input>
        <br />
        <span>Telefone de Emergência:</span>
        <Telefone name="telEmerg" />
        <br />
        <input id="restAlim" type="checkbox"></input>
        <label htmlFor="restAlim">Possui restrições alimentares</label>
        <input
          name="descRestAlim"
          placeholder="Descreva aqui as restrições alimentares"
          type="text"
        ></input>
        <br />
        <input id="usoImg" type="checkbox"></input>
        <label htmlFor="usoImg">Autoriza uso de imagem</label>
        <br />
        <span>Pessoa autorizada a buscar:</span>
        <Parentes />
        <br />
        <label htmlFor="turmas">Turma:</label>
        <select name="turmas">
          {turmas.map((turma) => {
            return (
              <option key={turma} value={turma}>
                {turma}
              </option>
            );
          })}
        </select>
        <br />
        <span>Observações Adicionais:</span>
        <textarea name="obsAdic"></textarea>
        <br />
        <br />
        <button type="button">Adicionar Novo Aluno/Salvar Alterações</button>
        <button type="reset" onClick={this.props.cancelar}>
          Cancelar
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
