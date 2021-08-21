import React from "react";
import classnames from "classnames";
import { useFormContext } from "react-hook-form";
import { ReactComponent as Checkmark } from "../images/check.svg";
import { isArray, pull } from "lodash";

function Checkbox({ label, name, value, rules }) {
  const { register, watch, setValue } = useFormContext();
  const fieldValue = watch(name);
  const isChecked = isArray(fieldValue)
    ? fieldValue.includes(value)
    : fieldValue === value;
  const checkboxClasses = classnames("uk-checkbox uk-margin-small-right", {
    checked: isChecked,
  });

  return (
    <label className="uk-margin-bottom">
      <input
        id={name}
        {...register(name, rules)}
        className="uk-hidden"
        value={value}
        type="checkbox"
      />
      <span
        role="checkbox"
        aria-checked={isChecked}
        tabIndex="0"
        className={checkboxClasses}
        onKeyDown={(e) => {
          if (!(e.key === " ")) return false;

          if (isArray(fieldValue)) {
            if (fieldValue.includes(value)) {
              setValue(name, pull(fieldValue, value));
              return;
            }

            setValue(name, [...fieldValue, value]);
          } else {
            setValue(name, value);
          }
        }}
      >
        {isChecked && <Checkmark />}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
