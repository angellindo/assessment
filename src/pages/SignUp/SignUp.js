import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import User from "../../api/User";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import useNotification from "../../hooks/useNotification";

import "./SignUp.scss";

function SignUp() {
  const methods = useForm({ criteriaMode: "all" });
  const { notification } = useNotification();
  const { handleSubmit, register } = methods;
  const onSubmit = async (data) => {
    const response = await new User(data).create();
    notification(response);
  };

  return (
    <main className="SignUp uk-container-xsmall uk-margin-auto">
      <h2 className="uk-text-bold">Sign up for email updates</h2>
      <p>* Indicates Required Field</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="uk-flex ">
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
              className="uk-width-1-1 uk-margin-small-left"
            />
          </div>
          <div className="uk-flex">
            <TextField
              label="Email Address*"
              name="email"
              rules={{ required: true }}
              className="uk-width-1-1"
            />
            <TextField
              label="Organization"
              name="organization"
              className="uk-width-1-1 uk-margin-small-left"
            />
          </div>
          <div className="uk-width-1-4">
            <Select
              name="euResident"
              label="EU Resident*"
              rules={{ required: true }}
              placeholder="- Select One -"
            />
          </div>
          <div className="uk-flex uk-margin-top">
            <div className="uk-width-1-1 uk-flex uk-flex-column">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  {...register("advances")}
                />{" "}
                Advances
              </label>
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  {...register("other")}
                />{" "}
                Other Communications
              </label>
            </div>
            <div className="uk-width-1-1 uk-margin-small-left">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  {...register("alerts")}
                />{" "}
                Alerts
              </label>
            </div>
          </div>
          <div className="form-actions uk-margin-top">
            <button type="submit" className="uk-button uk-button-primary">
              Submit
            </button>
            <button
              type="reset"
              className="uk-button uk-button-default uk-margin-small-left"
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
