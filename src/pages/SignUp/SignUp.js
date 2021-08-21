import React from "react";
import { map, startCase } from "lodash";
import { useForm, FormProvider } from "react-hook-form";
import User from "../../api/User";
import Checkbox from "../../components/Checkbox";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import useNotification from "../../hooks/useNotification";
import { validate } from "email-validator";

import "./SignUp.scss";

function SignUp() {
  const methods = useForm({
    criteriaMode: "all",
    defaultValues: { advances: false, other: false, alerts: false },
  });
  const { notification } = useNotification();
  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    const response = await new User(data).create();
    notification(response);
  };

  const handleReset = () => {
    clearErrors();
    reset();
  };

  const showErrors = () => {
    return (
      <ul className="uk-list uk-form-danger uk-text-bold">
        {map(errors, (error, key) => {
          const fieldMessage = error.message
            ? error.message
            : `${startCase(key)} is required`;
          return <li key={fieldMessage}>{fieldMessage}</li>;
        })}
      </ul>
    );
  };

  return (
    <main className="SignUp uk-container-xsmall uk-margin-auto uk-padding">
      <h2 className="uk-text-bold">Sign up for email updates</h2>
      <p>* Indicates Required Field</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {showErrors()}
          <div className="uk-flex fields">
            <TextField
              label="First Name*"
              name="firstName"
              rules={{ required: true }}
              className="uk-width-1-1"
            />
            <TextField
              label="Last Name*"
              name="lastName"
              rules={{ required: true }}
              className="uk-width-1-1 uk-margin-left"
            />
          </div>
          <div className="uk-flex fields">
            <TextField
              label="Email Address*"
              name="email"
              rules={{
                validate: (email) => {
                  if (email) {
                    return validate(email) || "Invalid Email";
                  }

                  return "Email is required";
                },
              }}
              className="uk-width-1-1"
            />
            <TextField
              label="Organization"
              name="organization"
              className="uk-width-1-1 uk-margin-left"
            />
          </div>
          <div className="uk-width-1-4@m uk-width-1-1">
            <Select
              name="euResident"
              label="EU Resident*"
              rules={{ required: "EU Resident is required" }}
              placeholder="- Select One -"
            />
          </div>
          <div className="uk-flex uk-margin-top checkboxes">
            <div className="uk-width-1-1 uk-flex uk-flex-column">
              <Checkbox label="Advances" name="advances" />
              <Checkbox label="Other Communications" name="other" />
            </div>
            <div className="uk-width-1-1 uk-margin-small-left">
              <Checkbox label="Alerts" name="alerts" />
            </div>
          </div>
          <div className="form-actions uk-margin-large-top">
            <button
              type="submit"
              className="uk-button uk-button-primary uk-width-1-1 uk-width-auto@s"
            >
              Submit
            </button>
            <button
              type="reset"
              className="uk-button uk-button-default uk-width-1-1 uk-width-auto@s"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

export default SignUp;
