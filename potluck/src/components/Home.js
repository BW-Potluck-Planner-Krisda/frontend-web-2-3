import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
// import dummyData from './dummyData';
import {connect} from 'react-redux';
import {fetchingEvents} from './actions/actionsIndex';


function Home(props) {
  return (
    <>
      <h1>Welcome {props.data.username}</h1>
      <div className='home'>
        <div className='saved'>
          <h2>Saved Events</h2>
          {props.data === [] ? (<p>No Saved Events</p>) : (
          props.data.map(saved => {
            return (
              <ul>
                <li key={saved.id} title={saved.title} date={saved.date}></li>
              </ul>)
          })
          )}

        </div>
        <div className='search'>

          <h2>Search Events</h2>
          <Search />
          {props.data.map(search => {
            return (
              <ul>
                <li key={search.id} title={search.title} date={search.date}></li>
              </ul>)
          })}
        </div>
      </div>

    </>
  )
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
)(Home);
