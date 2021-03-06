
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
// need an api to sends data and fetch from

//second route from App "/Registration"

const Schema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("please enter a valid email."),
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  password: yup.string().required("Please enter your password").min(6),
});

function Registration() {
  //react hook form

  const { reset, register } = useForm({});

  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    value: "",
    email: "",
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    value: "",
    email: "",
    username: "",
    password: "",
  });

  //   onSubmit function

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log("success!!!", res.data))
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
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
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
    // setting up form

    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formState.name}
          placeholder="Please enter your name"
          onChange={onChange}
        />
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
      </label>

      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          placeholder="Please enter email"
          onChange={onChange}
        />
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>

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
          <p className="error">{errorState.password}</p>
        ) : null}
      </label>

      <button type="submit" onClick={() => reset()}>
        Submit
      </button>
    </form>
  )
}

export default Registration;
