import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var imageStyles = {
    width : '400px',
    height : '200px'
  }
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add new Keg</Link>
      <hr></hr>
    </div>
  );
}

export default Header;