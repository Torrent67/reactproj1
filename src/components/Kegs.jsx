import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  let _id = props.passableKey;
  return (
    <div>
      <h3><strong>{props.brand} - {props.name}</strong></h3>
      <h4><em>{props.category}</em></h4>
      <p><em>Alcohol By Volume. {props.abv}%</em></p>
      <p>Price (pint). <em>${props.price}</em></p>
      <p>Inventory. {props.inv}</p>
      <p>Add Keg. <button onClick = {() => props.onInvUp(_id)}>+</button> Remove Pint. <button onClick = {() => props.onInvDown(_id)}>-</button></p>
      <hr/>
    </div>
  );
};

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string,
  price : PropTypes.string,
  abv : PropTypes.string,
  inventory : PropTypes.number,
  onInvUp : PropTypes.func,
  onInvDown : PropTypes.func
};

export default Keg;
