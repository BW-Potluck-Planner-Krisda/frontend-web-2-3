//dependencies

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link, Route, Switch } from "react-router-dom";

//importing guest and home components

import Guest from "./Guest";
import Home from "./Home";

// setting up schema validation

const Schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  what: yup
    .string()
    .oneOf(["Fundraiser", "Chrurch Event", "Family Gathering", "Work Event"]),
  where: yup.string().required("An address must be included"),
  month: yup
    .string()
    .oneOf([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
  day: yup
    .string()
    .oneOf([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "18",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ]),
  time: yup
    .string()
    .oneOf([
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "1:00",
      "1:15",
      "1:30",
      "1:45",
      "2:00",
      "2:15",
      "2:30",
      "2:45",
      "3:00",
      "3:15",
      "3:30",
      "3:45",
      "4:00",
      "4:15",
      "4:30",
      "4:45",
      "4:00",
      "4:15",
      "4:30",
      "4:45",
      "5:00",
      "5:15",
      "5:30",
      "5:45",
      "6:00",
      "6:15",
      "6:30",
      "6:45",
      "7:00",
      "7:15",
      "7:30",
      "7:45",
      "8:00",
      "8:15",
      "8:30",
      "8:45",
      "9:00",
      "9:15",
      "9:30",
      "9:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
    ]),
  ampm: yup.string().oneOf(["AM", "PM"]),
  where: yup.string().required("an address is required"),
  what: yup.string().required("What items do you require").min(3),
});

function Event() {
  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    when: "",
    month: "",
    day: "",
    time: "",
    ampm: "",
    where: "",
    what: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    when: "",
    month: "",
    day: "",
    time: "",
    ampm: "",
    where: "",
    what: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setFormState({
      username: "",
      when: "",
      month: "",
      day: "",
      time: "",
      ampm: "",
      where: "",
      what: "",
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

      <label htmlFor="why">
        What type of event are you hosting?
        <select name="why" onchange={onchange} id="why">
          <option>Fundraiser</option>
          <option>Church Event</option>
          <option>Family Gathering</option>
          <option>Work Event</option>
          <option>Celebration</option>
          <option>Other</option>
        </select>
      </label>
      <br></br>

      <label>
        When will the event be held?
        <br></br>
        <label htmlFor="month">What Month?</label>
        <select name="month" onChange={onChange} id="month">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </label>

      <label htmlFor="day">
        What day?
        <select name="day" onChange={onChange} id="day">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
        </select>
      </label>

      <label htmlFor="time">
        What time?
        <select name="time" onChange={onChange} id="time">
          <option>12:00</option>
          <option>12:15</option>
          <option>12:30</option>
          <option>12:45</option>
          <option>1:00</option>
          <option>1:15</option>
          <option>1:30</option>
          <option>1:45</option>
          <option>2:00</option>
          <option>2:15</option>
          <option>2:30</option>
          <option>2:45</option>
          <option>3:00</option>
          <option>3:15</option>
          <option>3:30</option>
          <option>3:45</option>
          <option>4:00</option>
          <option>4:15</option>
          <option>4:30</option>
          <option>4:45</option>
          <option>5:00</option>
          <option>5:15</option>
          <option>5:30</option>
          <option>5:45</option>
          <option>6:00</option>
          <option>6:15</option>
          <option>6:30</option>
          <option>6:45</option>
          <option>7:00</option>
          <option>7:15</option>
          <option>7:30</option>
          <option>7:45</option>
          <option>7:00</option>
          <option>8:15</option>
          <option>8:30</option>
          <option>8:45</option>
          <option>9:00</option>
          <option>9:15</option>
          <option>9:30</option>
          <option>9:45</option>
          <option>10:00</option>
          <option>10:15</option>
          <option>10:30</option>
          <option>10:45</option>
          <option>10:00</option>
          <option>11:15</option>
          <option>11:30</option>
          <option>11:45</option>
        </select>
      </label>

      <label htmlFor="ampm">
        AM or PM?
        <select name="ampm" onChange={onChange} id="ampm">
          <option>AM</option>
          <option>PM</option>
        </select>
      </label>

      <br></br>

      <label htmlFor="where">
        Where will the event be held?
        <input
          type="text"
          name="where"
          value={formState.where}
          placeholder="Please enter your address"
          onChange={onChange}
        />
      </label>
      <br></br>

      <label htmlFor="what">
        What dishes do you request?
        <input
          type="text"
          name="what"
          value={formState.what}
          placeholder="Dishes requested"
          onChange={onChange}
        />
      </label>

      <br></br>
      <button disabled={buttonDisabled} type="submit">
        Submit
      </button>

      <div>
        <Route path="/Home">
          <Event />
        </Route>
        <Route exact path="/Guest">
          <Guest />
        </Route>

        <h3>Not the Host? </h3>
        <Link to="/Guest">Guest</Link>
        <span> </span>
        <Link to="/Host">Home</Link>
      </div>
    </form>
  );
}

export default Event;
