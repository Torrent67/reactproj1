import React from 'react';
import PropTypes from 'prop-types';

const EditKeg = (props) => {

  let _brand = props.kegToEdit.brand;
  let _name = props.kegToEdit.name;
  let _category = props.kegToEdit.category;
  let _price = props.kegToEdit.price;
  let _abv = props.kegToEdit.price;
  
  var formStyle = {
    marginLeft: '10px',
    backgroundColor: 'lavender',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onKegEdit({ brand: _brand.value, name: _name.value, category: _category.value, price: _price.value, abv: _abv.value, id : props.kegToEdit.id });
    _brand.value = null;
    _name.value = null;
    _category.value = null;
    _price.value = null;
    _abv.value = null;
  }

  return (
    <div style={formStyle} >
      <br></br>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='brand'
          placeholder= {props.kegToEdit.brand}
          defaultValue = {props.kegToEdit.brand}
          ref = {(input) => {_brand = input;}} />
        <br></br>
        <input
          type='text'
          id='name'
          placeholder= {props.kegToEdit.name} 
          defaultValue = {props.kegToEdit.name} 
          ref = {(input) => {_name = input;}} />
        <br></br>
        <input
          type='text'
          id='category'
          placeholder= {props.kegToEdit.category}
          defaultValue = {props.kegToEdit.category}
          ref = {(input) => {_category = input;}} />
        <br></br>
        <input
          type='number'
          id='price'
          min = '0.00'
          step = '0.01'
          max = '100.00'
          placeholder= {props.kegToEdit.price}
          defaultValue = {props.kegToEdit.price}
          ref = {(input) => {_price = input;}} />
        <br></br>
        <input
          type='number'
          id='abv'
          min = '0.00'
          step = '0.01'
          max = '100.00'
          placeholder= {props.kegToEdit.abv}
          defaultValue = {props.kegToEdit.abv}
          ref = {(input) => {_abv = input;}} />
        <br></br>

        <button type='submit'>Edit</button>
      </form>
    </div>
  );
};

export default EditKeg;

EditKeg.propTypes = {
  handleNewKegSubmission : PropTypes.func
};