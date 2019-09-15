import React from 'react';
import { Link } from 'react-router-dom';
import logoKegs from '../assets/images/logo.jpg';

function Header(){
  var imageStyles = {
    width : '200px',
    height : '200px',
    float : 'right'
  };
  return (
    <div>
      <img src = { logoKegs } style = {imageStyles}/>
      <h1 style = {{ float : 'left', margin : 'auto', marginTop : '0px', marginRight :'10px' }}>React TapRoom</h1>
      <hr></hr>
      <Link to="/">Home</Link> | <Link to="/AddKeg">Add new Keg</Link>
      <hr></hr>
    </div>
  );
}

export default Header;