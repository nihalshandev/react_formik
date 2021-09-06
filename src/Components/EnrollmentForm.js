import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormControl from "./FormControl";

const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.string().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl control="textarea" label="Bio" name="bio" />
            <FormControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormControl
              control="checkbox"
              label="Your Skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormControl control="date" label="Course Date" name="courseDate" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrollmentForm;
