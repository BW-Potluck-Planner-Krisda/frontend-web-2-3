import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {fetchingEvents} from './actions/actionsIndex';

//todo: Harry Potter test run
// const characters = [
//   "Harry Potter",
//   "Luna Lovegood",
//   "Neville Longbottom",
//   "Hermione Granger",
//   "Ron Weasley",
//   "Ginny Weasley",
//   "Fred Weasley",
//   "George Weasley",
//   "Albus Dumbledore ",
//   "Aberforth Dumbledore ",
//   "Dudley Dursley ",
//   "Petunia Dursley ",
//   "Vernon Dursley",
//   "Cornelius Fudge",
//   "Rubeus Hagrid ",
//   "Viktor Krum ",
//   "Bellatrix Lestrange",
//   "Narcissa Malfoy",
//   "Draco Malfoy",
// ];

const Search = (props) => {
  /* Todo:STEP 1: Create searchTerm and searchResults state
   - searchTerm will save the data from the search input on every occurance of the change event.
   - searchResults is used to set the search result.
  */

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = characters.filter((character) => {
  //     return character.toLowerCase().includes(searchTerm.toLowerCase());
  //   });

  //   setSearchResults(results);
  //   //console.log("hello", results);
  // }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = e => {
    e.prentDefault();
    props.fetchingEvents(searchTerm);
  }

  return (
    <div>
      <form>
        {/* <label htmlFor="search">Search: </label> */}
        <input
          id="search"
          type="text"
          name="searchfield"
          placeholder="Search here"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>search</button>
      </form>

      <div>
        {/* <ul>
          {searchResults.map((character) => (
            <li key={character}>{character}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchingEvents
  }
)
(Search);
