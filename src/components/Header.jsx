import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>The Tap Room.</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add new Keg</Link>
      <hr></hr>
    </div>
  );
}

export default Header;