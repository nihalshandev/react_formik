import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const CheckboxGroup = (props) => {
  const { label, name, options, ...rest } = props;
  console.log(options);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log("Field", field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <label htmlFor={option.value}>{option.key}</label>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckboxGroup;
