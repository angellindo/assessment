import React from "react";
import classnames from "classnames";
import { useFormContext } from "react-hook-form";
import { ReactComponent as Checkmark } from "../images/check.svg";

function Checkbox({ label, name }) {
  const { register, watch } = useFormContext();
  const isChecked = watch(name);

  const checkboxClasses = classnames("uk-checkbox uk-margin-small-right", {
    checked: isChecked,
  });

  return (
    <label className="uk-margin-bottom">
      <input {...register(name)} className="uk-hidden" type="checkbox" />
      <span className={checkboxClasses}>{isChecked && <Checkmark />}</span>
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
