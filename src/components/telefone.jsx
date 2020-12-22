import { Field } from "formik";

export const Telefone = (values) => (
  <Field
    className={values.className}
    name={values.name}
    placeholder="Ex.: (00) 0000-0000"
    type="text"
  />
);
