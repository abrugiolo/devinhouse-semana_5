import { Component } from "react";
import "../assets/css/estilo.css";
// import { DisplayState } from "../components/displayState";

// let aluno = {};
export default class ListaAlunos extends Component {
  handleEditar(aluno) {
    // this.aluno = aluno;
    this.props.editar(aluno);
  }

  handleExcluir(aluno) {
    this.props.excluir(aluno);
  }

  buscarNome = () => {
    const nome = document.getElementById("nomeBusca").value;
    return nome;
  };

  render() {
    const alunos = this.props.alunos;

    return (
      <>
        <div className="busca-aluno">
          <span>Buscar Aluno:</span>
          <input id="nomeBusca" type="text" placeholder="Insira o nome do aluno"></input>
          <button
            onClick={() => {
              if (document.getElementById("nomeBusca").value === "")
                alert("Insira o nome do aluno!");
              else this.props.buscar(this.buscarNome());
            }}
          >
            Pesquisar
          </button>
          <button
            onClick={() => {
              document.getElementById("nomeBusca").value = "";
              this.props.buscar("");
            }}
          >
            Mostrar Todos
          </button>
        </div>

        {(!alunos || alunos.length === 0) && <span>Nenhum aluno encontrado.</span>}

        {alunos && alunos.length > 0 && (
          <div className="lista">
            <table className="lista-alunos">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Turma</th>
                  <th>Contato Para Emergências</th>
                  <th>Telefone Para Emergências</th>
                  <th className="acoes" colSpan="2">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno) => (
                  <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.dataNasc}</td>
                    <td>{aluno.turma}</td>
                    <td>{aluno.contEmerg}</td>
                    <td>{aluno.telEmerg}</td>
                    <td>
                      <button onClick={() => this.handleEditar(aluno)}>Editar</button>
                    </td>
                    <td>
                      <button onClick={() => this.handleExcluir(aluno)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* {this.aluno && <DisplayState {...this.aluno} />} */}
          </div>
        )}
      </>
    );
  }
}
