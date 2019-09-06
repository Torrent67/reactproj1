import React from 'react';
import { Link } from 'react-router-dom';
import logoKegs from '../assets/images/logo.jpg';

function Header(){
  var imageStyles = {
    width : '400px',
    height : '200px'
  }
  return (
    <div>
      <h1>React TapRoom</h1><img src = { logoKegs }/>
      <hr></hr>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add new Keg</Link>
      <hr></hr>
    </div>
  );
}

export default Header;