import React from "react";
import { useFormContext } from "react-hook-form";
import { ReactComponent as ExpandArrow } from "../images/expand-arrow.svg";

function Select({ label, name, rules = {}, className, placeholder, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = errors && Object.keys(errors).includes(name);
  const errorClass = hasError ? "uk-form-danger" : "";

  return (
    <div className={className}>
      <label className="uk-form-label" htmlFor="euResident">
        {label}
      </label>
      <div className="form-control uk-position-relative">
        <select
          {...register(name, rules)}
          id={name}
          name={name}
          className={`uk-select ${errorClass}`}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="select-arrow uk-position-absolute uk-position-center-right">
          <ExpandArrow />
        </span>
      </div>
    </div>
  );
}

export default Select;
