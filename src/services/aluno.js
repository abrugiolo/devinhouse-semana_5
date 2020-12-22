import axios from "axios";
import * as constants from "./constants";

const BASE_URL = `${constants.DEVINHOUSE_API}/alunos`;

class AlunoService {
  buscarAlunos() {
    return axios
      .get(BASE_URL) //process.env.REACT_APP_BACKEND/alunos
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  adicionarAluno(aluno) {
    return axios.post(BASE_URL, aluno).catch((error) => {
      throw error;
    });
  }

  atualizarAluno(aluno) {
    return axios.put(BASE_URL, aluno).catch((error) => {
      throw error;
    });
  }

  buscarAluno(nome) {
    return axios
      .get(BASE_URL)
      .then((response) => {
        const arrayAlunos = response.data;
        const arrayBusca = arrayAlunos.filter(
          (aluno) => aluno.nome.toLowerCase().search(nome.toLowerCase()) > -1
        );
        return arrayBusca;
      })
      .catch((error) => {
        throw error;
      });
  }

  excluirAluno(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }
}

export default new AlunoService();
