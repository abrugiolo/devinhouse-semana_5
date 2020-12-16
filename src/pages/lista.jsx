import React, { Component } from "react";
import "../assets/css/estilo.css";

class ListaAlunos extends Component {
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    const alunos = this.props.alunos;

    if (!alunos || alunos.length === 0) {
      return <span>Não existem alunos cadastrados.</span>;
    }

    return (
      <>
        {alunos && alunos.length > 0 && (
          <div className="lista">
            <div className="busca-aluno">
              <input placeholder="Insira o nome do aluno"></input>
              <button title="Pesquisar">
                {/* <i class="fas fa-search"></i> */}
                Pesquisar
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Turma</th>
                  <th>Telefone de Emergência</th>
                  <th>Contato de Emergência</th>
                  <th className="acoes" colSpan="2">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno) => (
                  <tr key={aluno.nome}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.dataNasc}</td>
                    <td>{aluno.turma}</td>
                    <td>{aluno.telEmerg}</td>
                    <td>{aluno.contEmerg}</td>
                    <td>
                      <button title="Editar">
                        Editar
                        {/* <i className="fas fa-user-edit"></i> */}
                      </button>
                    </td>
                    <td>
                      <button title="Excluir">
                        Excluir
                        {/* <i classNamess="far fa-trash-alt"></i> */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

export default ListaAlunos;
