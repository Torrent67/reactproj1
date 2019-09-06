import React from 'react';
import Header from './Header';
import TapsList from './TapsList';
import { Switch, Route } from 'react-router-dom';
import NewKegsForm from './NewKegsForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapsList} />
        <Route path='/newKeg' component={NewKegsForm} />
      </Switch>
    </div>
  );
}

export default App;