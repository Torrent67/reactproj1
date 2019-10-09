import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const KegList =(props) =>{
  
  function onInvUp (id) {
    props.onInventoryUp(id);
  }
  function onInvDown (id) {
    props.onInventoryDown(id);
  }

  return (
    <div style = {{
      marginLeft : '10px'
    }}>
      
      {props.kegList.map((keg) =>
        <Keg 
          brand = {keg.brand}
          name = {<Link to = {'/Edit'} onClick = { () => props.onKegSelection(keg.id)}>{keg.name}</Link>}
          category = {keg.category} 
          price = {keg.price}
          abv = {keg.abv}
          inv = {keg.inventory}
          key = {keg.id}
          passableKey = {keg.id}
          onInvUp = {onInvUp}
          onInvDown = {onInvDown}
        />
      )}
    </div>
  );
};

KegList.propTypes = {
  onInventoryUp : PropTypes.func,
  onInventoryDown : PropTypes.func
};

export default KegList; 