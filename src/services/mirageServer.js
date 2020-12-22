import { createServer, Model } from "miragejs";
import * as constants from "./constants";
import { alunos } from "../util/constantes";

export function criarServidor({ enviroment = "test" } = {}) {
  const server = createServer({
    enviroment,

    models: {
      aluno: Model,
    },

    seeds(server) {
      alunos.forEach((aluno) => server.create("aluno", aluno));
    },

    routes() {
      this.namespace = constants.DEVINHOUSE_API;

      this.get("/alunos", (schema) => schema.alunos.all().models);

      this.post("/alunos", (schema, request) => {
        const dados = JSON.parse(request.requestBody);
        return schema.alunos.create(dados);
      });

      this.put("/alunos", (schema, request) => {
        const dados = JSON.parse(request.requestBody);
        return schema.alunos.create(dados);
      });

      this.delete("/alunos/:id", (schema, request) => {
        const id = request.params.id;
        return schema.alunos.find(id).destroy();
      });
    },
  });

  return server;
}
