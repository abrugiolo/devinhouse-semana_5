/*
    aluno = {
      nome: "",
      dataNasc: dd/mm/aaaa,
      nomeResp: "",
      telResp: (00) 00000-0000,
      contEmerg: "",
      telEmerg: (00) 00000-0000,
      restAlim: true/false,
      descRestAlim: "",
      usoImg: true/false,
      autBusc: [ {"",""} ],
      turma: "",
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
    turma: "3A",
    telEmerg: "(12) 98765-4321",
    contEmerg: "Patinhas - Tio",
    autBusc: [
      { nome: "Donald", parentesco: "Tio" },
      { nome: "Patinhas", parentesco: "Tio" },
      { nome: "Margarida", parentesco: "Tia" },
    ],
    usoImg: true,
  },
  {
    nome: "Zezinho",
    dataNasc: "16/04/1938",
    turma: "3B",
    telEmerg: "(98) 76543-4321",
    contEmerg: "Donald - Tio",
    autBusc: [
      { nome: "Donald", parentesco: "Tio" },
      { nome: "Patinhas", parentesco: "Tio" },
      { nome: "Margarida", parentesco: "Tia" },
    ],
    usoImg: false,
  },
  {
    nome: "Luizinho",
    dataNasc: "17/04/1938",
    turma: "3C",
    telEmerg: "(00) 13245-6789",
    contEmerg: "Margarida - Tia",
    autBusc: [
      { nome: "Donald", parentesco: "Tio" },
      { nome: "Patinhas", parentesco: "Tio" },
      { nome: "Margarida", parentesco: "Tia" },
    ],
    usoImg: true,
  },
];
