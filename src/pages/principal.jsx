import React from "react";
import Pagina from "../components/pagina";
import Secao from "../components/secao";
import FormularioCadastro from "./formulario";
import ListaAlunos from "./lista";
import { alunos } from "../util/constantes";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alunos: [] };
  }

  componentDidMount() {
    this.setState({ alunos: alunos });
  }

  render() {
    return (
      <>
        <Pagina>
          <Secao title="Cadastro do Aluno"></Secao>
          <FormularioCadastro />
          <Secao title="Lista de Alunos">
            <ListaAlunos alunos={this.state.alunos}></ListaAlunos>
          </Secao>
        </Pagina>
      </>
    );
  }
}

export default Principal;
