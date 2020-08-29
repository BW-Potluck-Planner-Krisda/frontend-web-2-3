import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
// import dummyData from './dummyData';
import {connect} from 'react-redux';
import {fetchingEvents} from './actions/actionsIndex';


function Home(props) {
  return (
    <>
      <h1>Welcome to Your Home Page</h1>
      <div className='home'>
        <div className='saved'>
          <h2>Saved Events</h2>
        </div>
        <div className='search'>

          <h2>Search Events</h2>
          <Search />
        </div>
      </div>

    </>
  )
};

export default Home;
