//dependencies

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

// setting up schema validation

const Schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  attending: yup.string().oneOf(["Yes", "No", "maybe"]),

  bringing: yup.string().required("What items will you bring>").min(3),
});

function Guest() {
  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    attending: "",
    bringing: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    attending: "",
    bringing: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setFormState({
      username: "",
      attending: "",
      bringing: "",
    });

    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log("Success!!!", res.data))
      .catch((err) => console.log("Failed", err));
  };

  const validate = (e) => {
    yup
      .reach(Schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const onChange = (e) => {
    e.persist();
    console.log("input changed", e.target.value);

    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    validate(e);
    setFormState(newFormData);
  };

  useEffect(() => {
    Schema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState]);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          value={formState.username}
          placeholder="Please enter username"
          onChange={onChange}
        />
        {errorState.username.length > 0 ? (
          <p className="error">{errorState.username}</p>
        ) : null}
      </label>
      <br></br>

      <label htmlFor="attending">
        Will you be attending?
        <select name="attending" onChange={onChange} id="attending">
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
      </label>

      <br></br>

      <label htmlFor="bringing">
        What whill you bring??
        <input
          type="text"
          name="bringing"
          value={formState.bringing}
          placeholder="What will you bring"
          onChange={onChange}
        />
      </label>

      <br></br>
      <button disabled={buttonDisabled} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Guest;
