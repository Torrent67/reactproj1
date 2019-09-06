import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  return (
    <div>
            <style global jsx>{`
          div {
            background-color: lavender;
          }
        `}</style>
      <h3><strong>{props.brand} - {props.name}</strong></h3>
      <h4><em>{props.category}</em></h4>
      <p><em>Alcohol By Volume {props.abv}%</em></p>
      <p>Price per (pint): <em>${props.price}</em></p>
      <hr/>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string,
  price : PropTypes.number,
  abv : PropTypes.number,
};

export default Kegs;