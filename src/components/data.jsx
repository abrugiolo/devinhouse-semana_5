import { Field } from "formik";

export const Data = (values) => (
  <Field
    className={values.classname}
    name={values.name}
    placeholder="Ex.: dd/mm/aaaa"
    type="text"
  />
);
