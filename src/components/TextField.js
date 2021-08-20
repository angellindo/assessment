import React from "react";
import { useFormContext } from "react-hook-form";

const TextField = ({ label, name, rules = {}, className, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = errors && Object.keys(errors).includes(name);
  const errorClass = hasError ? "uk-form-danger" : "";

  return (
    <div className={`TextField uk-margin ${className}`}>
      <label className="uk-form-label" htmlFor={name}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input
          {...register(name, rules)}
          className={`uk-input  ${errorClass}`}
          type="text"
          placeholder="Some text..."
          {...props}
        />
      </div>
    </div>
  );
};

export default TextField;
