import { Component } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import { turmas, grausParentesco } from "../util/constantes";
import { Data } from "../components/data";
import { Telefone } from "../components/telefone";
import "../assets/css/estilo.css";
// import { DisplayState } from "../components/displayState";

const INITIAL_VALUES = {
  // aluno: {
  nome: "",
  dataNasc: "",
  nomeResp: "",
  telResp: "",
  contEmerg: "",
  telEmerg: "",
  restAlim: false,
  descRestAlim: "",
  usoImg: false,
  turma: "",
  podeBuscar: [],
  obsAdic: "",
  // },
};

const INITIAL_STATE = {
  nomeParente: "",
  parentesco: grausParentesco[0],
};

const dataRegex = /^([0-9]{2})[/]([0-9]{2})[/]([0-9]{4})$/; // dd/mm/aaaa
const telRegex = /^\(([0-9]{2})\)[ ]([9]?[0-9]{4})[-]([0-9]{4})$/; // (00) [9]0000-0000

const AlunoSchema = yup.object().shape({
  nome: yup.string().required("Preencha o nome do aluno."),
  // dataNasc: yup
  //   .string()
  //   .required("Preencha a data de nascimento.")
  //   .matches(dataRegex, "Formato esperado: dd/mm/aaaa."),
  // nomeResp: yup.string().required("Preencha o nome do responsável."),
  // contEmerg: yup.string().required("Preencha o nome do contato para emergências."),
  // telResp: yup
  //   .string()
  //   .required("Preencha o telefone do responsável.")
  //   .matches(telRegex, "Formato esperado: (00) 0000-0000 ou (00) 90000-0000"),
  // telEmerg: yup
  //   .string()
  //   .required("Preencha o telefone para emergências.")
  //   .matches(telRegex, "Formato esperado: (00) 0000-0000 ou (00) 90000-0000"),
  // restAlim: yup.boolean(),
  // descRestAlim: yup.string().when("restAlim", {
  //   is: true,
  //   then: yup.string().required("Prencha as restrições alimentares."),
  // }),
  // podeBuscar: yup
  //   .array()
  //   .min(1, "Adicione ao menos uma pessoa autorizada a buscar o aluno."),
  // obsAdic: yup.string(),
});

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  adicionarAluno = (values, actions) => {
    this.props.adicionar(values);
    actions.resetForm();
  };

  alterarParente = (target, setFieldValue) => {
    this.setState({ [target.name]: target.value });
    setFieldValue(target.name, target.value);
  };

  adicionarParente = (values, arrayHelpers) => {
    arrayHelpers.push(this.state);

    values.nomeParente = undefined;
    values.parentesco = undefined;

    this.setState({
      nomeParente: "",
      parentesco: grausParentesco[0],
    });
  };

  render() {
    return (
      <Formik
        enableReinitialize
        validadeOnMount={true}
        validationSchema={AlunoSchema}
        initialValues={INITIAL_STATE && (this.props.alunoEmEdicao || INITIAL_VALUES)}
        onSubmit={(values, actions) => this.adicionarAluno(values, actions)}
        render={({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="formulario">
              <div className="campo-formulario">
                <label>Nome do Aluno:</label>
                <Field className="input-formulario" name="nome" type="text" />
                {touched.nome && errors.nome && (
                  <span className="erro-campo-formulario">{errors.nome}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label>Data de Nascimento:</label>
                <Data className="input-formulario" name="dataNasc" />
                {touched.dataNasc && errors.dataNasc && (
                  <span className="erro-campo-formulario">{errors.dataNasc}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label>Nome do Responsável:</label>
                <Field className="input-formulario" name="nomeResp" type="text" />
                {touched.nomeResp && errors.nomeResp && (
                  <span className="erro-campo-formulario">{errors.nomeResp}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label>Telefone do Responsável:</label>
                <Telefone className="input-formulario" name="telResp" />
                {touched.telResp && errors.telResp && (
                  <span className="erro-campo-formulario">{errors.telResp}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label>Em caso de emergência avisar:</label>
                <Field className="input-formulario" name="contEmerg" type="text" />
                {touched.contEmerg && errors.contEmerg && (
                  <span className="erro-campo-formulario">{errors.contEmerg}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label>Telefone para emergências:</label>
                <Telefone className="input-formulario" name="telEmerg" />
                {touched.telEmerg && errors.telEmerg && (
                  <span className="erro-campo-formulario">{errors.telEmerg}</span>
                )}
              </div>

              <div className="campo-formulario">
                <label htmlFor="restAlim">Possui restrições alimentares?</label>
                <Field className="input-formulario" name="restAlim" type="checkbox" />
                <br />
                {values.restAlim && (
                  <>
                    <Field
                      className="input-formulario"
                      name="descRestAlim"
                      placeholder="Insira aqui as restrições alimentares"
                      as="textarea"
                    />
                    {touched.descRestAlim && errors.descRestAlim && (
                      <span className="erro-campo-formulario">{errors.descRestAlim}</span>
                    )}
                  </>
                )}
              </div>

              <div className="campo-formulario">
                <label htmlFor="usoImg">Autoriza uso de imagem?</label>
                <Field className="input-formulario" name="usoImg" type="checkbox" />
              </div>

              <div className="campo-formulario">
                <label>Turma:</label>
                <Field className="input-formulario" name="turma" as="select">
                  {turmas.map((turma) => (
                    <option key={turma} value={turma}>
                      {turma}
                    </option>
                  ))}
                </Field>
              </div>

              <div className="campo-formulario">
                <FieldArray
                  name="podeBuscar"
                  render={(arrayHelpers) => (
                    <>
                      <label>Pessoas autorizadas a buscar:</label>
                      <ul>
                        {values.podeBuscar && values.podeBuscar.length > 0
                          ? values.podeBuscar.map((parente, index) => (
                              <li key={index}>
                                {parente.nomeParente} ({parente.parentesco}) &nbsp;
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Excluir
                                </button>
                              </li>
                            ))
                          : null}
                      </ul>
                      <div className="adicionar-parente">
                        <Field
                          type="text"
                          name="nomeParente"
                          value={this.state.nomeParente}
                          onChange={(evento) =>
                            this.alterarParente(evento.target, setFieldValue)
                          }
                        />
                        <Field
                          as="select"
                          name="parentesco"
                          value={this.state.parentesco}
                          onChange={(evento) =>
                            this.alterarParente(evento.target, setFieldValue)
                          }
                        >
                          {grausParentesco.map((grau) => (
                            <option key={grau} value={grau}>
                              {grau}
                            </option>
                          ))}
                        </Field>
                        <button
                          type="button"
                          name="btnAdicionarParente"
                          onClick={() => this.adicionarParente(values, arrayHelpers)}
                        >
                          Adicionar
                        </button>
                      </div>
                    </>
                  )}
                />
                {(touched.nomeParente || touched.podeBuscar) && errors.podeBuscar && (
                  <span className="erro-campo-formulario">{errors.podeBuscar}</span>
                )}
              </div>

              <div className="campo-formulario">
                <Field
                  className="input-formulario"
                  name="obsAdic"
                  placeholder="Observações adicionais..."
                  as="textarea"
                />
              </div>
            </div>

            <div className="botoes-formulario">
              <button className="botao-formulario" type="submit">
                {this.props.alunoEmEdicao ? "Salvar Alterações" : "Adicionar Novo Aluno"}
              </button>
              <button
                className="botao-formulario"
                type="reset"
                onClick={() => {
                  if (this.props.alunoEmEdicao) {
                    this.props.cancelar();
                  }
                }}
              >
                Cancelar
              </button>
            </div>
            {/* <DisplayState {...values} /> */}
          </Form>
        )}
      />
    );
  }
}

export default FormularioCadastro;
