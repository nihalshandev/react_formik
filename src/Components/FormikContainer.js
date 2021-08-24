import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

const FormikContainer = () => {
  const initialValues = {
      email: ''
  };
  const validationSchema = Yup.object({
      email: Yup.string().required('Required')
  });
  const onSubmit = (values) => console.log("Form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
            <FormControl control='input' type='email' label="Email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
