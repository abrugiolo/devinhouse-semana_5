import React from "react";
import Pagina from "../components/pagina";
import Secao from "../components/secao";
import FormularioCadastro from "./formulario";
import ListaAlunos from "./lista";
import { alunos } from "../util/constantes";

class Principal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {};
    this.state = { alunos: [] };
  }

  componentDidMount() {
    this.setState({ alunos: alunos });
  }

  componentDidUpdate(prevState) {
    if (this.state.alunoEmEdicao === prevState.alunoEmEdicao) {
      return;
    }
  }

  editarAluno(aluno) {
    console.log("Aluno em edição:", aluno);
    this.setState({ alunoEmEdicao: aluno });
  }

  cancelarEdicao() {
    if (this.state.alunoEmEdicao) {
      console.log("Edição do aluno cancelada:", this.state.alunoEmEdicao.nome);
      this.setState({ alunoEmEdicao: "" });
    }
  }

  excluirAluno(aluno) {
    const alunosAux = this.state.alunos.filter(
      (alunoAux) => alunoAux.nome !== aluno.nome
    );
    this.setState({ alunos: alunosAux });

    console.log("Aluno excluído:", aluno);
  }

  // adicionarAluno(aluno) {
  //   const alunosAux = this.state.alunos;
  //   alunosAux.push(aluno);
  //   this.setState({ alunos: alunosAux });

  //   console.log("Aluno adicionado:", aluno);
  // }

  render() {
    return (
      <>
        <Pagina>
          <Secao title="Cadastro do Aluno">
            <FormularioCadastro cancelar={() => this.cancelarEdicao()} />
          </Secao>
          <Secao title="Lista de Alunos">
            <ListaAlunos
              alunos={this.state.alunos}
              editar={(aluno) => this.editarAluno(aluno)}
              excluir={(aluno) => this.excluirAluno(aluno)}
            ></ListaAlunos>
          </Secao>
        </Pagina>
      </>
    );
  }
}

export default Principal;
