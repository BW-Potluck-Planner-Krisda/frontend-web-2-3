import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
import dummyData from './dummyData';


function Home() {
  return (
    <>
      <h1>Welcome *username*</h1>
      <div className='home'>
        <div className='saved'>
          <h2>Saved Events</h2>
          {dummyData.map(saved => {
            return (
              <ul>
                <li key={saved.id} title={saved.title} date={saved.date}></li>
              </ul>)
          })}

        </div>
        <div className='search'>

          <h2>Search Events</h2>
          <Search />
          {dummyData.map(saved => {
            return (
              <ul>
                <li key={saved.id} title={saved.title} date={saved.date}></li>
              </ul>)
          })}
        </div>
      </div>

    </>
  )
}

export default Home;
