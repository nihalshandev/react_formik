import React from "react";
import Input from "./Input";
import RadioButton from "./RadioButton";
import CheckboxGroup from "./CheckboxGroup";
import Select from "./Select";
import TextArea from "./TextArea";

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormControl;
