import React from 'react';
import Header from './Header';
import KegList from './KegList';
import Error404 from './Error404';
import NewKegForm from './NewKegForm';
import EditKeg from './EditKeg';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: [],
      selectedKeg: null
    };
    this.handleKeg = this.handleKeg.bind(this);
    this.handleKegSelection = this.handleKegSelection.bind(this);
    this.handleKegEdit = this.handleKegEdit.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
    this.handleInventoryUp = this.handleInventoryUp.bind(this);
    this.handleInventoryDown = this.handleInventoryDown.bind(this);
  }
  
  handleKegEdit(keg) {
    let newKegList = this.state.kegList.slice();
    newKegList.splice(newKegList.indexOf(x => x.id == keg.id), 1, keg);
    this.setState({ kegList: newKegList });
  }

  //Deleting single keg not working, deletes every keg after edit
  handleDeleteKeg(id) {
    let newKegList = this.state.kegList.filter(x => x.id != id);
    this.setState({ kegList: newKegList });
    this.setState({selectedKeg : null});
  }

  
  handleKeg(keg) {
    let newKegList = this.state.kegList.slice();
    newKegList.push(keg);
    this.setState({ kegList: newKegList });
  }
  
  handleKegSelection(id) {
    let currentKeg = this.state.kegList.find(keg => keg.id == id);
    this.setState({ selectedKeg: currentKeg });
  }
  
  handleInventoryUp(id) {
    let newKegList = this.state.kegList.slice();
    let currentKeg = newKegList.find(x => x.id == id);
    currentKeg.inventory+=124;
    newKegList.splice(newKegList.indexOf(x => x.id == currentKeg.id), 1, currentKeg);
    this.setState({ kegList: newKegList });
  }
  
  handleInventoryDown(id) {
    let newKegList = this.state.kegList.slice();
    let currentKeg = newKegList.find(x => x.id == id);
    currentKeg.inventory-=1;
    newKegList.splice(newKegList.indexOf(x => x.id == currentKeg.id), 1, currentKeg);
    this.setState({ kegList: newKegList });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList 
            kegList={this.state.kegList} 
            onKegSelection={this.handleKegSelection}
            onInventoryUp = {this.handleInventoryUp}
            onInventoryDown = {this.handleInventoryDown}
          />} />
          <Route exact path='/NewKeg' render={() => <NewKegForm 
            onNewKeg={this.handleKeg} 
          />} />
          <Route exact path='/Edit' render={() => <EditKeg
            kegToEdit={this.state.selectedKeg} 
            onKegEdit={this.handleKegEdit} 
          />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;