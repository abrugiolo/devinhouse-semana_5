/*
    aluno = {
      nomeParente: "",
      dataNasc: dd/mm/aaaa,
      nomeResp: "",
      telResp: (00) [9]0000-0000,
      contEmerg: "",
      telEmerg: (00) [9]0000-0000,
      restAlim: true/false,
      descRestAlim: "",
      usoImg: true/false,
      turma: "",
      podeBuscar: [ {nomeParente: "", parentesco: ""} ],
      obsAdic: "",
    }
*/

export const grausParentesco = [
  "Mãe",
  "Pai",
  "Tia",
  "Tio",
  "Madrinha",
  "Padrinho",
  "Avó",
  "Avô",
  "Outro",
];

export const turmas = [
  "1A",
  "1B",
  "1C",
  "2A",
  "2B",
  "2C",
  "3A",
  "3B",
  "3C",
  "4A",
  "4B",
  "4C",
];

export const alunos = [
  {
    nome: "Huguinho",
    dataNasc: "15/04/1938",
    nomeResp: "Donald",
    telResp: "(98) 98765-1234",
    contEmerg: "Patinhas",
    telEmerg: "(12) 98765-4321",
    restAlim: false,
    descRestAlim: "",
    usoImg: true,
    turma: "3A",
    podeBuscar: [
      { nomeParente: "Donald", parentesco: "Tio" },
      { nomeParente: "Patinhas", parentesco: "Tio" },
    ],
  },
  {
    nome: "Zezinho",
    dataNasc: "16/04/1938",
    nomeResp: "Patinhas",
    telResp: "(12) 98765-4321",
    contEmerg: "Margarida",
    telEmerg: "(01) 2345-6789",
    restAlim: false,
    descRestAlim: "",
    usoImg: false,
    turma: "3B",
    podeBuscar: [
      { nomeParente: "Patinhas", parentesco: "Tio" },
      { nomeParente: "Margarida", parentesco: "Tia" },
    ],
  },
  {
    nome: "Luizinho",
    dataNasc: "17/04/1938",
    nomeResp: "Margarida",
    telResp: "(01) 2345-6789",
    contEmerg: "Donald",
    telEmerg: "(98) 98765-1234",
    restAlim: false,
    descRestAlim: "",
    usoImg: true,
    turma: "3C",
    podeBuscar: [
      { nomeParente: "Margarida", parentesco: "Tia" },
      { nomeParente: "Donald", parentesco: "Tio" },
    ],
  },
];
