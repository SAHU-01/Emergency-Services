import React from 'react';
import { Navbar, BodyMain } from '../components';
import '../index.css'; 

const Homepage = () => {
  return (
    <div>
      <div class="m-5">
      <div class="">
        <Navbar />
      </div>
      <div className="main">
        <BodyMain />
      </div>
      <div className="footer">

      </div>
    </div>
    </div>
  )
}

export default Homepage
