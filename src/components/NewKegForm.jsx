import React from 'react';
import Proptype from 'prop-types';
import { v4 } from 'uuid';


function NewKegForm() {
  
  
  let _brand = null;
  let _name = null;
  let _category = null;
  let _price = null;
  let _abv = null;
  
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
    props.onNewKeg({ brand: _brand.value, name: _name.value, category: _category.value, price: _price.value, abv: _abv.value, id :v4(), inventory : 124 });
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
          placeholder='Brand' 
          ref = {(input) => {_brand = input;}} />
        <br></br><br></br>
        <input
          type='text'
          id='name'
          placeholder='Name' 
          ref = {(input) => {_name = input;}} />
        <br></br><br></br>
        <input
          type='text'
          id='category'
          placeholder='category' 
          ref = {(input) => {_category = input;}} />
        <br></br><br></br>
        <input
          type='number'
          id='price'
          min = '0.00'
          step = '0.01'
          max = '100.00'
          placeholder='price' 
          ref = {(input) => {_price = input;}} />
        <br></br><br></br>
        <input
          type='number'
          id='abv'
          min = '0.00'
          step = '0.01'
          max = '100.00'
          placeholder='Alcohol By Volume %' 
          ref = {(input) => {_abv = input;}} />
        <br></br><br></br>

        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

export default NewKegForm;

NewKegForm.propTypes = {
  handleNewKegSubmission : Proptype.func
};