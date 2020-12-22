import { Component } from "react";
import Pagina from "../components/pagina";
import Secao from "../components/secao";
import FormularioCadastro from "./formulario";
import ListaAlunos from "./lista";
import AlunosService from "../services/aluno";

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = { alunos: [] };
  }

  componentDidMount() {
    this.carregarAlunos();
  }

  async carregarAlunos() {
    const alunos = await AlunosService.buscarAlunos();
    this.setState({ alunos: alunos });
  }

  adicionarAluno = (aluno) => {
    if (aluno.id) {
      // console.log("atualizarAluno:", aluno);
      AlunosService.atualizarAluno(aluno)
        .then(() => {
          this.carregarAlunos();
          this.setState({ alunoEmEdicao: null });
        })
        .catch((erro) => {
          throw erro;
        });
      return;
    }

    // console.log("adicionarAluno:", aluno);
    AlunosService.adicionarAluno(aluno)
      .then(() => {
        this.carregarAlunos();
        this.setState({ alunoEmEdicao: null });
      })
      .catch((erro) => {
        throw erro;
      });
  };

  editarAluno = (aluno) => {
    // console.log("editarAluno:", aluno);
    this.setState({ alunoEmEdicao: aluno });
  };

  cancelarEdicao = () => {
    // console.log("cancelarEdicao:", this.state.alunoEmEdicao);
    this.setState({ alunoEmEdicao: null });
  };

  excluirAluno = (aluno) => {
    // console.log("excluirAluno:", aluno);
    AlunosService.excluirAluno(aluno.id)
      .then(() => this.carregarAlunos())
      .catch((erro) => {
        throw erro;
      });
  };

  async buscarAluno(nomeAluno) {
    const alunosBuscados = await AlunosService.buscarAluno(nomeAluno).catch((erro) => {
      throw erro;
    });

    // console.log(`buscarAluno("${nomeAluno}"):`, alunosBuscados);
    this.setState({ alunos: alunosBuscados });
  }

  render() {
    return (
      <Pagina>
        <div className="conteudo">
          <Secao title="Cadastro do Aluno">
            <FormularioCadastro
              alunoEmEdicao={this.state.alunoEmEdicao}
              adicionar={(aluno) => this.adicionarAluno(aluno)}
              cancelar={() => this.cancelarEdicao()}
            />
          </Secao>
          <Secao title="Lista de Alunos">
            <ListaAlunos
              alunos={this.state.alunos}
              editar={(aluno) => this.editarAluno(aluno)}
              excluir={(aluno) => this.excluirAluno(aluno)}
              buscar={(nomeAluno) => this.buscarAluno(nomeAluno)}
            ></ListaAlunos>
          </Secao>
        </div>
      </Pagina>
    );
  }
}
