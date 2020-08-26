import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome *username*</h1>
      <div className='saved'>
        <h2>Saved Events</h2>
        {/* map out title and date of events here as a linked div to Display single event component*/}

      </div>
      <div className='recent'>
        <h2>Recently Viewed</h2>
        {/* map out title and date of past views here as a linked div to Display single event component*/}
      </div>

    </>
  )
}

export default Home;
