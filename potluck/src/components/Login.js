import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//need api to send and get data from

// first route from app "/"

const Schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  password: yup.string().required("Please enter your password"),
});

function Login() {
  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log(res.data), "success!!!")
      .catch((err) => console.log(err), "Failed");
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
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
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
          <p classname="error">{errorState.username}</p>
        ) : null}
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={formState.password}
          placeholder="Please enter password"
          onChange={onChange}
        />
        {errorState.password.length > 0 ? (
          <p classname="error">{errorState.password}</p>
        ) : null}
      </label>

      <button type="submit" disabled={buttonDisabled}>
        Submit
      </button>
    </form>
  );
}

export default Login;
