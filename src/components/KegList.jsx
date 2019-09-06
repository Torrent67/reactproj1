import React from 'react';
import Kegs from './Kegs';

function KegsList(){
  return (
    <Keg
      brand="Guiness"
      name="Black Lager"
      category="Irish Dry Stout"
      price = "6.50"
      abv = "4.5"

      brand="Deschutes Black Butte Porter"
      name="Black Lager"
      category="American Porter"
      price = "6.50"
      abv = "5.2"
      
      />
  );
  
}

export default KegsList;